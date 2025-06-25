import React from 'react';
import Button from '@mui/material/Button';
import DrawIcon from '@mui/icons-material/Draw'; // Example Icon

function SignatureButton({ onClick, disabled }) {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<DrawIcon />}
      onClick={onClick}
      disabled={disabled}
      sx={{ my: 2 }}
    >
      Sign Document
    </Button>
  );
}

export default SignatureButton;
