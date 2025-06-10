// src/components/UploadForm.jsx
import { useState } from 'react';
import { Button, Box, Input, Typography, Select, MenuItem, FormControl, InputLabel, FormHelperText} from '@mui/material';
const REGULATION_HELP_TEXT = {
  'FCRA_INDIA': 'Please upload your organization\'s policy document concerning foreign funding or donations.',
  'GDPR_EU': 'Please upload your organization\'s policy document concerning data privacy and user data management.'
};
// The onAnalyze prop will now receive both the file and the regulation
function UploadForm({ onAnalyze, isLoading }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [regulation, setRegulation] = useState('FCRA_INDIA'); // Default value
    
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  
  const handleRegulationChange = (event) => {
    setRegulation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAnalyze(selectedFile, regulation); // Pass both values up
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4, p: 2, border: '1px dashed grey', borderRadius: 2, textAlign: 'center' }}>
      
      {/* Regulation Dropdown */}
      <FormControl fullWidth sx={{ mb: 2, textAlign: 'left' }}>
        <InputLabel id="regulation-select-label">Regulation</InputLabel>
        <Select
          labelId="regulation-select-label"
          id="regulation-select"
          value={regulation}
          label="Regulation"
          onChange={handleRegulationChange}
        >
          <MenuItem value={'FCRA_INDIA'}>India - FCRA</MenuItem>
          <MenuItem value={'GDPR_EU'}>EU - GDPR (Data Privacy)</MenuItem>
          {/* Add more regulations here as you build them out */}
        </Select>
      </FormControl>
      
      {/* File Upload */}
      <Input type="file" onChange={handleFileChange} id="file-upload-input" sx={{ display: 'none' }} />
      <FormHelperText sx={{ mb: 2, textAlign: 'center' }}>
        {REGULATION_HELP_TEXT[regulation]}
      </FormHelperText>
      <label htmlFor="file-upload-input">
        <Button variant="outlined" component="span">
          Choose Policy File
        </Button>
      </label>
      {selectedFile && <Typography sx={{ mt: 1 }}>{selectedFile.name}</Typography>}
      
      <Button type="submit" variant="contained" sx={{ display: 'block', margin: '1rem auto' }} disabled={isLoading || !selectedFile}>
        {isLoading ? 'Analyzing...' : 'Analyze Now'}
      </Button>
    </Box>
  );
}

export default UploadForm;