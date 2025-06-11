import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import myLogo from '../assets/eye.png';

const navLinks = [
  { label: 'Dashboard', to: '#dashboard' },
  { label: 'About', to: '#AboutApp' },
  { label: 'Contact', to: '#contact' },
  { label: 'Docs', to: '#docs' },
];

const Header = () => {
  // Smooth scroll handler for anchor links
  const handleNavClick = (e, to) => {
    e.preventDefault();
    const el = document.querySelector(to);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AppBar
      position="static"
      elevation={6}
      sx={{
        background: 'linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%)',
        borderRadius: '0 0 18px 18px',
        boxShadow: '0 4px 24px 0 rgba(99, 102, 241, 0.15)',
      }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: 56, sm: 64 },
          px: { xs: 2, sm: 4 },
          py: 0.5,
        }}
      >
        <IconButton
          size="large"
          edge="start"
          aria-label="logo"
          sx={{
            background: 'rgba(255,255,255,0.10)',
            color: '#fff',
            mr: 2,
            p: 0.5,
            '&:hover': {
              background: 'rgba(255,255,255,0.22)',
            },
          }}
          href="#dashboard"
          onClick={e => handleNavClick(e, '#dashboard')}
        >
          <img
            src={myLogo}
            alt="Logo"
            style={{
              height: 36,
              width: 36,
              borderRadius: '50%',
              background: '#23263a',
              objectFit: 'cover',
              boxShadow: '0 2px 8px 0 rgba(99,102,241,0.10)',
            }}
          />
        </IconButton>
        <Typography
          variant="h5"
          component="a"
          href="#dashboard"
          onClick={e => handleNavClick(e, '#dashboard')}
          sx={{
            fontWeight: 800,
            letterSpacing: 1.5,
            color: '#fff',
            flexGrow: 1,
            textShadow: '1px 2px 8px rgba(99, 102, 241, 0.18)',
            textDecoration: 'none',
            transition: 'color 0.2s',
            '&:hover': { color: '#e0e7ff' },
          }}
        >
          PoliSee
        </Typography>
        <Box sx={{ flexGrow: 0 }}>
          <Stack direction="row" spacing={1}>
            {navLinks.map((link) => (
              <Button
                key={link.to}
                href={link.to}
                onClick={e => handleNavClick(e, link.to)}
                sx={{
                  color: '#fff',
                  fontWeight: 600,
                  letterSpacing: 1,
                  borderRadius: 2,
                  px: 2,
                  textTransform: 'none',
                  transition: 'background 0.2s, color 0.2s',
                  '&:hover': {
                    background: 'rgba(255,255,255,0.10)',
                    color: 'var(--primary-dark)',
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
