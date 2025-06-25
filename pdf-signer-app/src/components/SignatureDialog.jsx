import React, { useRef } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
// import SignatureCanvas from 'react-signature-canvas'; // Will be imported later

function SignatureDialog({ open, onClose, onSaveSignature }) {
  const sigCanvas = useRef({});

  const clearSignature = () => {
    // sigCanvas.current.clear(); // Will be enabled with react-signature-canvas
    console.log("Signature cleared (placeholder)");
  };

  const saveSignature = () => {
    // const signatureDataUrl = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    // onSaveSignature(signatureDataUrl);
    console.log("Signature saved (placeholder)");
    onSaveSignature("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA
AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
9TXL0Y4OHwAAAABJRU5ErkJggg=="); // Placeholder data
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Provide Your Signature</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            border: '1px dashed grey',
            height: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white', // Canvas background
          }}
          id="signature-canvas-container"
        >
          {/*
            <SignatureCanvas
              ref={sigCanvas}
              penColor='black'
              canvasProps={{width: 500, height: 200, className: 'sigCanvas'}}
            />
          */}
          Placeholder for Signature Canvas
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={clearSignature} color="secondary">
          Clear
        </Button>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={saveSignature} variant="contained">
          Save Signature
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SignatureDialog;
