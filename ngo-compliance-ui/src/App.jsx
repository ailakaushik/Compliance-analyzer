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

import UploadForm from './components/UploadForm';
import ComplianceDashboard from './components/ComplianceDashboard';
import Header from './components/Header';
import AboutApp from './components/AboutApp'; // ✅ New import
import Footer from './components/Footer'; // ✅ Import Footer

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
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        {/* Main Content Area */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 4,
            backgroundColor: 'background.default',
          }}
        >
          <Container maxWidth="xl">
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
                    {/* ✅ Show AboutApp below the form only when not loading */}
                    <AboutApp />
                  </>
                )}
              </Box>
            ) : (
              <ComplianceDashboard result={analysisResult} onReset={handleReset} />
            )}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;