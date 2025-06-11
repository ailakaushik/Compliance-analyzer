import React, { useState } from 'react';
import {
  Button,
  Box,
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
  Fade,
  Tooltip,
} from '@mui/material';
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
    <Card
      sx={{
        minWidth: 340,
        maxWidth: 480,
        mx: 'auto',
        mt: 7,
        borderRadius: 5,
        boxShadow: '0 8px 32px 0 rgba(33, 150, 243, 0.18)',
        background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)',
        border: '1.5px solid #bbdefb',
        overflow: 'visible',
      }}
    >
      <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
          <Fade in>
            <Box
              sx={{
                background: 'linear-gradient(135deg, #1976d2 60%, #42a5f5 100%)',
                borderRadius: '50%',
                width: 64,
                height: 64,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 1.5,
                boxShadow: '0 4px 16px 0 rgba(33, 150, 243, 0.16)',
              }}
            >
              <MdUploadFile size={36} color="#fff" />
            </Box>
          </Fade>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{
              fontWeight: 900,
              letterSpacing: 1.5,
              color: 'primary.main',
              textAlign: 'center',
              textShadow: '0 2px 8px #e3f2fd',
            }}
          >
            Start Your Compliance Check
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2, textAlign: 'center', maxWidth: 340 }}
          >
            Upload your policy file and select your country/region to begin.
          </Typography>
        </Box>
        <Divider sx={{ mb: 3, borderColor: '#90caf9' }} />
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <FormControl fullWidth>
            <InputLabel id="country-select-label" sx={{ fontWeight: 600 }}>
              Country/Region
            </InputLabel>
            <Select
              labelId="country-select-label"
              id="country-select"
              value={country}
              label="Country/Region"
              onChange={handleCountryChange}
              sx={{
                borderRadius: 2,
                background: '#f5faff',
                fontWeight: 500,
                boxShadow: '0 2px 8px 0 rgba(33, 150, 243, 0.04)',
              }}
            >
              <MenuItem value="IN">India</MenuItem>
              <MenuItem value="US">United States</MenuItem>
              <MenuItem value="EU">European Union</MenuItem>
              <MenuItem value="UK">United Kingdom</MenuItem>
              <MenuItem value="SG">Singapore</MenuItem>
            </Select>
          </FormControl>
          <Tooltip
            title="Supported: .zip, .pdf, .docx, .txt"
            arrow
            placement="top"
            enterDelay={300}
          >
            <Button
              variant="outlined"
              component="label"
              fullWidth
              startIcon={<MdUploadFile size={26} />}
              sx={{
                border: file ? '2.5px solid #1976d2' : '2px dashed #90caf9',
                color: 'primary.main',
                background: file ? '#e3f2fd' : '#f5faff',
                borderRadius: 2,
                p: 2,
                fontWeight: 600,
                fontSize: '1rem',
                letterSpacing: 0.5,
                transition: 'background 0.2s, border 0.2s',
                boxShadow: file ? '0 2px 8px 0 #bbdefb' : 'none',
                '&:hover': {
                  background: '#bbdefb',
                  border: '2.5px solid #1976d2',
                },
              }}
            >
              {file ? file.name : 'Drag or Choose Policy File (.zip, .pdf, .docx, .txt)'}
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
          </Tooltip>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={!file}
            sx={{
              p: 1.5,
              fontWeight: 'bold',
              fontSize: '1.1rem',
              borderRadius: 2,
              boxShadow: 3,
              background: !file
                ? 'linear-gradient(90deg, #e3f2fd 60%, #bbdefb 100%)'
                : 'linear-gradient(90deg, #1976d2 60%, #42a5f5 100%)',
              color: !file ? '#90caf9' : '#fff',
              letterSpacing: 1,
              mt: 0.5,
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            Analyze Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UploadForm;