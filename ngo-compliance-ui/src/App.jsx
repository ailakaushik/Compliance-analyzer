import { useState } from 'react';
import { Container, Typography, CircularProgress, Alert } from '@mui/material';
import UploadForm from './components/UploadForm';
import ComplianceDashboard from './components/ComplianceDashboard';
import axios from 'axios';

// Your live API endpoint from the 'serverless deploy' output
const API_ENDPOINT = 'https://6p5gwei8hj.execute-api.us-east-2.amazonaws.com/analyze';

function App() {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async (file) => {
    if (!file) {
      setError('Please select a file to analyze.');
      return;
    }

    setIsLoading(true);
    setError('');
    setAnalysisResult(null);

    // FileReader to convert the file to a base64 string
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      // NEW, ROBUST CODE
try {
  const base64String = reader.result.split(',')[1];
  const response = await axios.post(API_ENDPOINT, {
    policy_document: base64String,
  });

  let analysisData;
  // Check if response.data is an object with a 'body' property (Payload v1.0)
  if (typeof response.data === 'object' && response.data.body) {
    analysisData = JSON.parse(response.data.body);
  } 
  // Check if response.data is a string (Payload v2.0)
  else if (typeof response.data === 'string') {
    analysisData = JSON.parse(response.data);
  } 
  // Handle unexpected but successful responses
  else {
    analysisData = response.data;
  }
  
  setAnalysisResult(analysisData);

} catch (err) {
//...
        console.error('API Error:', err);
        setError('Failed to analyze the document. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    reader.onerror = () => {
      setError('Failed to read the file.');
      setIsLoading(false);
    };
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