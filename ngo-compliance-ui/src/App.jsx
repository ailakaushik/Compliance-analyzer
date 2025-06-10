import { useState } from 'react';
import { Container, Typography, CircularProgress, Alert } from '@mui/material';
import UploadForm from './components/UploadForm';
import ComplianceDashboard from './components/ComplianceDashboard';
import axios from 'axios';
import * as pdfjsLib from 'pdfjs-dist/build/pdf'; // Import the library
// Your live API endpoint from the 'serverless deploy' output
const API_ENDPOINT = 'https://6p5gwei8hj.execute-api.us-east-2.amazonaws.com/analyze';
pdfjsLib.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;
function App() {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // In src/App.jsx
const getFileText = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            // Handle TXT files
            if (file.type === 'text/plain') {
                reader.onload = (event) => resolve(event.target.result);
                reader.onerror = (err) => reject(err);
                reader.readAsText(file);
            } 
            // Handle PDF files
            else if (file.type === 'application/pdf') {
                reader.onload = async (event) => {
                    try {
                        const pdf = await pdfjsLib.getDocument(event.target.result).promise;
                        let text = '';
                        for (let i = 1; i <= pdf.numPages; i++) {
                            const page = await pdf.getPage(i);
                            const content = await page.getTextContent();
                            text += content.items.map(item => item.str).join(' ');
                        }
                        resolve(text);
                    } catch (err) {
                        reject(err);
                    }
                };
                reader.onerror = (err) => reject(err);
                reader.readAsArrayBuffer(file); // pdf.js needs an ArrayBuffer
            } 
            else {
                reject(new Error('Unsupported file type. Please upload a .txt or .pdf file.'));
            }
        });
};
const handleAnalyze = async (file, regulation) => {
    if (!file) {
      setError('Please select a file.');
      return;
    }

    setIsLoading(true);
    setError('');
    setAnalysisResult(null);

    // This is a helper function to get text from any file type
    const getTextFromFile = (fileToProcess) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = () => reject(new Error('Failed to read the file.'));
        
        // --- Logic for PDF files ---
        if (fileToProcess.type === 'application/pdf') {
          reader.onload = async (event) => {
            try {
              const pdf = await pdfjsLib.getDocument(event.target.result).promise;
              let fullText = '';
              for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                fullText += textContent.items.map(item => item.str).join(' ');
              }
              resolve(fullText);
            } catch (pdfError) {
              reject(new Error('Failed to parse PDF file.'));
            }
          };
          reader.readAsArrayBuffer(fileToProcess); // pdf.js works with ArrayBuffer
        } 
        // --- Logic for TXT files ---
        else if (fileToProcess.type === 'text/plain') {
          reader.onload = (event) => {
            resolve(event.target.result);
          };
          reader.readAsText(fileToProcess);
        } 
        // --- Handle unsupported files ---
        else {
          reject(new Error(`Unsupported file type: ${fileToProcess.type}. Please use .pdf or .txt.`));
        }
      });
    };

    // --- Main execution flow ---
    try {
      // 1. Get the plain text from the file, regardless of type
      const policyText = await getTextFromFile(file);

      // 2. Base64-encode the extracted PLAIN TEXT// NEW, robust way to handle any character
const base64EncodedText = btoa(unescape(encodeURIComponent(policyText)));

      // 3. Send the encoded text to the backend
      const response = await axios.post(API_ENDPOINT, {
        policy_document: base64EncodedText,
        regulation_id: regulation,
      });

      // 4. Handle the response (this robust parsing is still good to have)
      let analysisData;
      if (response.data && typeof response.data === 'object') {
        analysisData = response.data; // Assuming backend now returns straight JSON
      } else if (typeof response.data === 'string') {
        analysisData = JSON.parse(response.data);
      }
      setAnalysisResult(analysisData);

    } catch (err) {
      console.error('API Error:', err);
      setError(err.message || 'An error occurred during analysis.');
    } finally {
      setIsLoading(false);
    }
};

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Cross-Border Regulatory Compliance Tool
      </Typography>

      <UploadForm onAnalyze={handleAnalyze} isLoading={isLoading} />

      {isLoading && <CircularProgress sx={{ display: 'block', margin: '2rem auto' }} />}
      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
      {analysisResult && <ComplianceDashboard result={analysisResult} />}
    </Container>
  );
}

export default App;