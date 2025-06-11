import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

const GetInTouchForm = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(120deg, #23263a 0%, #181a20 100%)',
        py: 8,
        px: 2,
        minHeight: '100vh',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        fontWeight={700}
        gutterBottom
        sx={{ color: 'var(--primary-dark)' }}
      >
        Get in Touch
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ color: 'var(--text-muted)', mb: 4 }}
      >
        We'd love to hear from you. Please fill out this form or use our contact information below.
      </Typography>

      <Box maxWidth="sm" mx="auto">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 'var(--border-radius)',
            background: 'var(--card-bg)',
            color: 'var(--text-main)',
            boxShadow: 'var(--shadow)',
            border: '1px solid #262a40',
            backdropFilter: 'blur(8px)',
          }}
        >
          <Box component="form" noValidate>
            <TextField
              label="First Name *"
              fullWidth
              variant="outlined"
              margin="normal"
              InputProps={{
                sx: {
                  background: '#23263a',
                  color: 'var(--text-main)',
                  borderRadius: 2,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#262a40',
                  },
                },
              }}
              InputLabelProps={{
                sx: { color: 'var(--text-muted)' },
              }}
            />
            <TextField
              label="Last Name *"
              fullWidth
              variant="outlined"
              margin="normal"
              InputProps={{
                sx: {
                  background: '#23263a',
                  color: 'var(--text-main)',
                  borderRadius: 2,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#262a40',
                  },
                },
              }}
              InputLabelProps={{
                sx: { color: 'var(--text-muted)' },
              }}
            />
            <TextField
              label="Email *"
              type="email"
              fullWidth
              variant="outlined"
              margin="normal"
              InputProps={{
                sx: {
                  background: '#23263a',
                  color: 'var(--text-main)',
                  borderRadius: 2,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#262a40',
                  },
                },
              }}
              InputLabelProps={{
                sx: { color: 'var(--text-muted)' },
              }}
            />
            <TextField
              label="Subject *"
              fullWidth
              variant="outlined"
              margin="normal"
              InputProps={{
                sx: {
                  background: '#23263a',
                  color: 'var(--text-main)',
                  borderRadius: 2,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#262a40',
                  },
                },
              }}
              InputLabelProps={{
                sx: { color: 'var(--text-muted)' },
              }}
            />
            <TextField
              label="Message *"
              fullWidth
              multiline
              minRows={4}
              variant="outlined"
              margin="normal"
              InputProps={{
                sx: {
                  background: '#23263a',
                  color: 'var(--text-main)',
                  borderRadius: 2,
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#262a40',
                  },
                },
              }}
              InputLabelProps={{
                sx: { color: 'var(--text-muted)' },
              }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                fontWeight: 'bold',
                textTransform: 'uppercase',
                background: 'linear-gradient(90deg, var(--primary), var(--accent))',
                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.18)',
                borderRadius: 2,
                color: '#fff',
                '&:hover': {
                  background: 'linear-gradient(90deg, var(--accent), var(--primary))',
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Paper>
      </Box>

      <Box mt={5} textAlign="center">
        <Divider sx={{ mb: 2, borderColor: '#23263a' }}>
          <Typography variant="body2" sx={{ color: 'var(--text-muted)' }}>
            Follow Us
          </Typography>
        </Divider>
        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton sx={{ color: 'var(--primary)' }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: 'var(--primary)' }}>
            <LinkedInIcon />
          </IconButton>
          <IconButton sx={{ color: 'var(--primary)' }}>
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ color: 'var(--primary)' }}>
            <LanguageIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default GetInTouchForm;
