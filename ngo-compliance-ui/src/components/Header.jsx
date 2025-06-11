import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
// CORRECTED: Using the reliable react-icons library instead of MUI icons
import { MdGavel } from 'react-icons/md';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* 
          The 'sx' prop is for MUI components.
          For react-icons, we use standard 'style' and 'size' props.
        */}
        <MdGavel size={28} style={{ marginRight: '1rem' }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          NGO Compliance Co-Pilot
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;