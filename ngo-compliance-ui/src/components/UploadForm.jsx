import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Fade,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';
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
        borderRadius: 'var(--border-radius)',
        boxShadow: 'var(--shadow)',
        background: 'var(--card-bg)',
        border: '1.5px solid #262a40',
        overflow: 'visible',
        color: 'var(--text-main)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
          <Fade in>
            <Box
              sx={{
                background: 'linear-gradient(135deg, var(--primary) 60%, var(--accent) 100%)',
                borderRadius: '50%',
                width: 64,
                height: 64,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 1.5,
                boxShadow: '0 4px 16px 0 rgba(99, 102, 241, 0.16)',
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
              color: 'var(--primary)',
              textAlign: 'center',
              textShadow: '0 2px 8px rgba(99, 102, 241, 0.18)',
            }}
          >
            Start Your Compliance Check
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'var(--text-muted)',
              mb: 2,
              textAlign: 'center',
              maxWidth: 340,
            }}
          >
            Upload your policy file and select your country/region to begin.
          </Typography>
        </Box>
        <Divider sx={{ mb: 3, borderColor: '#23263a' }} />
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <FormControl fullWidth>
            <InputLabel id="country-select-label" sx={{ fontWeight: 600, color: 'var(--text-muted)' }}>
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
                background: '#23263a',
                fontWeight: 500,
                color: 'var(--text-main)',
                boxShadow: '0 2px 8px 0 rgba(99, 102, 241, 0.04)',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#262a40',
                },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    background: '#23263a',
                    color: 'var(--text-main)',
                  },
                },
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
                border: file ? '2.5px solid var(--primary)' : '2px dashed var(--accent)',
                color: 'var(--primary)',
                background: file ? 'rgba(99,102,241,0.08)' : '#23263a',
                borderRadius: 2,
                p: 2,
                fontWeight: 600,
                fontSize: '1rem',
                letterSpacing: 0.5,
                transition: 'background 0.2s, border 0.2s',
                boxShadow: file ? '0 2px 8px 0 rgba(99,102,241,0.10)' : 'none',
                '&:hover': {
                  background: 'rgba(99,102,241,0.13)',
                  border: '2.5px solid var(--primary)',
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
                ? 'linear-gradient(90deg, #23263a 60%, #262a40 100%)'
                : 'linear-gradient(90deg, var(--primary) 60%, var(--accent) 100%)',
              color: !file ? 'var(--text-muted)' : '#fff',
              letterSpacing: 1,
              mt: 0.5,
              transition: 'background 0.2s, color 0.2s',
              textTransform: 'uppercase',
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