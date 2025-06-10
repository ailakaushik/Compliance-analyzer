import { useState } from 'react';
import { Button, Box, Input, Typography } from '@mui/material';

function UploadForm({ onAnalyze, isLoading }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAnalyze(selectedFile);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4, p: 2, border: '1px dashed grey', borderRadius: 2, textAlign: 'center' }}>
      <Input
        type="file"
        onChange={handleFileChange}
        id="file-upload-input"
        sx={{ display: 'none' }}
      />
      <label htmlFor="file-upload-input">
        <Button variant="outlined" component="span">
          Choose Policy File
        </Button>
      </label>
      {selectedFile && <Typography sx={{ mt: 1 }}>{selectedFile.name}</Typography>}
      <Button
        type="submit"
        variant="contained"
        sx={{ display: 'block', margin: '1rem auto' }}
        disabled={isLoading || !selectedFile}
      >
        {isLoading ? 'Analyzing...' : 'Analyze Now'}
      </Button>
    </Box>
  );
}

export default UploadForm;