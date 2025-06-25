import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function PDFUploader({ onFileSelect }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      onFileSelect(file);
    } else {
      // Handle error or notify user of invalid file type
      console.error("Invalid file type. Please select a PDF.");
      onFileSelect(null); // Or some error state
    }
  };

  return (
    <Box sx={{ my: 2 }}>
      <Button
        variant="contained"
        component="label" // Allows the button to act as a label for a hidden input
      >
        Upload PDF
        <input
          type="file"
          hidden
          accept="application/pdf"
          onChange={handleFileChange}
        />
      </Button>
    </Box>
  );
}

export default PDFUploader;
