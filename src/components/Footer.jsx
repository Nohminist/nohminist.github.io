import React from 'react';
import { Box, Typography } from '@mui/material';
// 他のインポートは必要に応じて

const Footer = () => {
  return (
    <div style={{ backgroundColor: 'gray', marginTop: '10px', padding: '10px' }}>
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} Nohminism All rights reserved.
      </Typography>
    </div>
  );
};

export default Footer;
