import React, { useState } from 'react';
import { Button, Box, Card, CardContent, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
// --- NEW, RELIABLE ICON IMPORT from react-icons ---
import { MdUploadFile } from 'react-icons/md';
import mockAnalysisResult from '../mock-analysis.json';

const UploadForm = ({ onAnalysisStart, onAnalysisSuccess, onAnalysisError }) => {
  const [file, setFile] = useState(null);
  const [country, setCountry] = useState('IN');
  const handleFileChange = (event) => setFile(event.target.files[0]);
  const handleCountryChange = (event) => setCountry(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!file) {
      onAnalysisError('Please select a file to upload.');
      return;
    }
    onAnalysisStart();
    setTimeout(() => {
      onAnalysisSuccess(mockAnalysisResult);
    }, 2000);
  };

  return (
    <Card sx={{ minWidth: 275, maxWidth: 600, boxShadow: 3 }}>
        <CardContent>
            <Typography variant="h5" component="div" gutterBottom>Start Your Compliance Check</Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel id="country-select-label">Select Country/Region</InputLabel>
                    <Select labelId="country-select-label" id="country-select" value={country} label="Select Country/Region" onChange={handleCountryChange}>
                        <MenuItem value="IN">India</MenuItem>
                        <MenuItem value="US">United States</MenuItem>
                        <MenuItem value="EU">European Union</MenuItem>
                        <MenuItem value="UK">United Kingdom</MenuItem>
                        <MenuItem value="SG">Singapore</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="outlined" component="label" fullWidth startIcon={<MdUploadFile />} sx={{ mb: 2, p: 2 }}>
                    {file ? file.name : 'Choose Policy File(s) (.zip, .pdf, .docx, .txt)'}
                    <input type="file" hidden onChange={handleFileChange} />
                </Button>
                <Button type="submit" fullWidth variant="contained" disabled={!file} sx={{ p: 1.5, fontWeight: 'bold' }}>
                    Analyze Now
                </Button>
            </Box>
        </CardContent>
    </Card>
  );
};

export default UploadForm;