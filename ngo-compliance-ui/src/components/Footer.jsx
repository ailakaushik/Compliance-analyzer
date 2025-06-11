import React from 'react';
import { Box, Typography, Link, Container, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
        color: '#fff',
        py: 4,
        px: 2,
        mt: 'auto',
        borderRadius: '18px 18px 0 0',
        boxShadow: '0 -4px 24px 0 rgba(25, 118, 210, 0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          spacing={3}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              NGO Compliance Co-Pilot
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, maxWidth: 400 }}>
              Empowering NGOs to navigate complex cross-border regulations with AI-driven document insights.
            </Typography>
          </Box>

          <Stack spacing={1}>
            <Link
              component={RouterLink}
              to="/privacy-policy"
              underline="hover"
              sx={{ color: '#fff', fontWeight: 500 }}
            >
              Privacy Policy
            </Link>
            <Link
              component={RouterLink}
              to="/terms-of-use"
              underline="hover"
              sx={{ color: '#fff', fontWeight: 500 }}
            >
              Terms of Use
            </Link>
            <Link
              component={RouterLink}
              to="/contact"
              underline="hover"
              sx={{ color: '#fff', fontWeight: 500 }}
            >
              Contact Us
            </Link>
          </Stack>
        </Stack>

        <Typography
          variant="caption"
          sx={{ display: 'block', mt: 4, textAlign: 'center', opacity: 0.8 }}
        >
          © {new Date().getFullYear()} POLI-SEE. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
// This Footer component provides a consistent footer across the application with links to privacy policy, terms of use, and contact information.