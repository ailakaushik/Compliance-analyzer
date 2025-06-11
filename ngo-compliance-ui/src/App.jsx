import React, { useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Box,
  Typography,
  CircularProgress,
  Alert
} from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import UploadForm from './components/UploadForm';
import ComplianceDashboard from './components/ComplianceDashboard';
import Header from './components/Header';
import AboutApp from './components/AboutApp';
import Footer from './components/Footer'; // ✅ Import Footer
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    background: { default: '#f4f6f8' },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1200px)': {
            maxWidth: '100%',
            padding: '0 48px',
          },
        },
      },
    },
  },
});

function App() {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalysisStart = () => {
    setIsLoading(true);
    setError('');
    setAnalysisResult(null);
  };

  const handleAnalysisSuccess = (result) => {
    setIsLoading(false);
    setAnalysisResult(result);
  };

  const handleAnalysisError = (errorMessage) => {
    setIsLoading(false);
    setError(errorMessage);
  };

  const handleReset = () => {
    setAnalysisResult(null);
    setError('');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', width: '100%', margin: 0, padding: 0 }}>
        <Header />
        <Routes>
          <Route path="/terms-of-use" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                py: 4,
                px: 0, // Remove horizontal padding
                backgroundColor: 'background.default',
                width: '100%',
                margin: 0
              }}
            >
              <Container 
                maxWidth={false} // Remove max-width constraint
                sx={{
                  px: 0, // Remove container padding
                  mx: 0, // Remove container margin
                  width: '100%'
                }}
              >
                <Box sx={{ my: 2 }}>
                  {!analysisResult && !isLoading && (
                    <>
                      <Typography variant="h4" component="h1" gutterBottom align="center">
                        Cross-Border Regulatory Compliance Tool
                      </Typography>
                      <Typography variant="h6" align="center" color="text.secondary" paragraph>
                        Upload your NGO's policy documents to instantly analyze compliance against global regulations.
                      </Typography>
                    </>
                  )}
                  {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                </Box>

                {!analysisResult ? (
                  <Box>
                    {isLoading ? (
                      <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
                        <CircularProgress size={60} />
                        <Typography variant="h6" sx={{ mt: 2 }}>
                          Analyzing your documents... This may take a moment.
                        </Typography>
                      </Box>
                    ) : (
                      <>
                        <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
                          <UploadForm
                            onAnalysisStart={handleAnalysisStart}
                            onAnalysisSuccess={handleAnalysisSuccess}
                            onAnalysisError={handleAnalysisError}
                          />
                        </Box>
                        <AboutApp />
                      </>
                    )}
                  </Box>
                ) : (
                  <ComplianceDashboard result={analysisResult} onReset={handleReset} />
                )}
              </Container>
            </Box>
          } />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
