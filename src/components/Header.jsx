import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'dimgray',
        color: 'white',
        padding: '10px'
      }}
    >
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <h1 style={{ margin: 0 }}>Nohminism</h1>
      </Link>
    </Box>
  );
};

export default Header;

