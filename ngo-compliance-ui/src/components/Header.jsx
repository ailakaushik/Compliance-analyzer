import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, useTheme } from '@mui/material';
import { MdGavel } from 'react-icons/md';

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      elevation={6}      sx={{
        background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
        borderRadius: '0 0 18px 18px',
        boxShadow: '0 4px 24px 0 rgba(25, 118, 210, 0.15)'
      }}
    >      <Toolbar 
        sx={{ 
          minHeight: { xs: 56, sm: 64 },
          px: { xs: 2, sm: 4 },
          py: 0.5
        }}
      >
        <IconButton
          size="large"
          edge="start"
          aria-label="logo"
          sx={{
            background: 'rgba(255,255,255,0.15)',
            color: '#fff',
            mr: 2,
            '&:hover': {
              background: 'rgba(255,255,255,0.25)',
            },
          }}
        >
          <MdGavel size={30} />
        </IconButton>
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 800,
            letterSpacing: 1.5,
            color: '#fff',
            flexGrow: 1,
            textShadow: '1px 2px 8px rgba(25, 118, 210, 0.18)',
          }}
        >
          NGO Compliance Co-Pilot
        </Typography>
        <Box sx={{ flexGrow: 0 }}>
          {/* Placeholder for future actions (user, notifications, etc.) */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
