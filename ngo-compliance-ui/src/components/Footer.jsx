import { Box, Container, Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'var(--card-bg)',
        color: 'var(--text-main)',
        py: 4,
        px: 2,
        mt: 'auto',
        borderRadius: '18px 18px 0 0',
        boxShadow: '0 -4px 24px 0 rgba(30, 41, 59, 0.13)',
        borderTop: '1.5px solid #23263a',
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
            <Typography variant="h6" sx={{ fontWeight: 600, color: 'var(--primary)' }}>
              NGO Compliance Co-Pilot
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, maxWidth: 400, color: 'var(--text-muted)' }}>
              Empowering NGOs to navigate complex cross-border regulations with AI-driven document insights.
            </Typography>
          </Box>

          <Stack spacing={1}>
            <Link
              component={RouterLink}
              to="/privacy-policy"
              underline="hover"
              sx={{
                color: 'var(--primary)',
                fontWeight: 500,
                transition: 'color 0.2s',
                '&:hover': { color: 'var(--accent)' },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              component={RouterLink}
              to="/terms-of-use"
              underline="hover"
              sx={{
                color: 'var(--primary)',
                fontWeight: 500,
                transition: 'color 0.2s',
                '&:hover': { color: 'var(--accent)' },
              }}
            >
              Terms of Use
            </Link>
            <Link
              component={RouterLink}
              to="/contact"
              underline="hover"
              sx={{
                color: 'var(--primary)',
                fontWeight: 500,
                transition: 'color 0.2s',
                '&:hover': { color: 'var(--accent)' },
              }}
            >
              Contact Us
            </Link>
          </Stack>
        </Stack>

        <Typography
          variant="caption"
          sx={{
            display: 'block',
            mt: 4,
            textAlign: 'center',
            opacity: 0.7,
            color: 'var(--text-muted)',
            letterSpacing: 1,
          }}
        >
          © {new Date().getFullYear()} POLI-SEE. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
// This Footer component provides a consistent footer across the application with links to privacy policy, terms of use, and contact information.