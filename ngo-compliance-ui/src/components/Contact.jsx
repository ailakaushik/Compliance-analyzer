import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
  Stack,
  IconButton,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';

const GetInTouchForm = () => {
  return (
    <Box sx={{ backgroundColor: '#f6f9fc', py: 8, px: 2 }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight={700}
        gutterBottom
        sx={{ color: '#1976d2' }}
      >
        Get in Touch
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="text.secondary"
        mb={4}
      >
        We'd love to hear from you. Please fill out this form or use our contact information below.
      </Typography>

      <Box maxWidth="sm" mx="auto">
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 3,
            background: '#fff',
          }}
        >
          <Box component="form" noValidate>
            <TextField
              label="First Name *"
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Last Name *"
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Email *"
              type="email"
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Subject *"
              fullWidth
              variant="outlined"
              margin="normal"
            />
            <TextField
              label="Message *"
              fullWidth
              multiline
              minRows={4}
              variant="outlined"
              margin="normal"
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                fontWeight: 'bold',
                textTransform: 'uppercase',
                background: 'linear-gradient(to right, #1e88e5, #42a5f5)',
                boxShadow: '0 4px 12px rgba(33, 150, 243, 0.3)',
                borderRadius: 2,
                '&:hover': {
                  background: 'linear-gradient(to right, #1565c0, #1e88e5)',
                }
              }}
            >
              Send Message
            </Button>
          </Box>
        </Paper>
      </Box>

      <Box mt={5} textAlign="center">
        <Divider sx={{ mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Follow Us
          </Typography>
        </Divider>
        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton sx={{ color: 'primary.main' }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: 'primary.main' }}>
            <LinkedInIcon />
          </IconButton>
          <IconButton sx={{ color: 'primary.main' }}>
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ color: 'primary.main' }}>
            <LanguageIcon />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default GetInTouchForm;
