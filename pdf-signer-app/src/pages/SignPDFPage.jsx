import React, { useState, useCallback } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import PDFUploader from '../components/PDFUploader';
import PDFViewer from '../components/PDFViewer';
import SignatureButton from '../components/SignatureButton';
import SignatureDialog from '../components/SignatureDialog';
// import { embedSignature } from '../utils/pdfUtils'; // Will be used later

function SignPDFPage() {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfDataUri, setPdfDataUri] = useState(null); // For react-pdf
  const [signature, setSignature] = useState(null); // To store signature image data
  const [isSignatureDialogOpen, setIsSignatureDialogOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState(null); // { pageIndex, x, y, width, height }

  const handleFileSelect = useCallback((file) => {
    setPdfFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPdfDataUri(e.target.result);
      };
      reader.readAsDataURL(file); // react-pdf can take data URI
    } else {
      setPdfDataUri(null);
    }
    setSignature(null); // Reset signature if new PDF is uploaded
    setSelectedArea(null); // Reset selected area
  }, []);

  const handleOpenSignatureDialog = () => {
    // In a real scenario, we'd ensure an area is selected in PDFViewer first.
    // For now, this button just opens the dialog.
    // if (selectedArea) {
    setIsSignatureDialogOpen(true);
    // } else {
    //   alert("Please select an area on the PDF to place the signature.");
    // }
  };

  const handleCloseSignatureDialog = () => {
    setIsSignatureDialogOpen(false);
  };

  const handleSaveSignature = (signatureDataUrl) => {
    setSignature(signatureDataUrl);
    console.log("Signature data received in page:", signatureDataUrl);
    // Here, we would eventually trigger the PDF modification
    // For now, we just store it.
  };

  const handleDownloadSignedPdf = async () => {
    if (!pdfFile || !signature || !selectedArea) {
      alert("Please upload a PDF, select an area, and provide a signature first.");
      return;
    }
    // const pdfBuffer = await pdfFile.arrayBuffer();
    // const signedPdfBytes = await embedSignature(pdfBuffer, signature, selectedArea.pageIndex, selectedArea.coords, selectedArea.size);
    // const blob = new Blob([signedPdfBytes], { type: 'application/pdf' });
    // const link = document.createElement('a');
    // link.href = URL.createObjectURL(blob);
    // link.download = 'signed_document.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    console.log("Download signed PDF (placeholder) - PDF modification logic to be implemented.");
    alert("PDF Signing and Download logic is not yet implemented.");
  };


  // Placeholder for area selection from PDFViewer
  // This would be set by a callback from PDFViewer
  const handleAreaSelect = (area) => {
    setSelectedArea(area);
    console.log("Area selected:", area);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Sign Your PDF
        </Typography>

        <PDFUploader onFileSelect={handleFileSelect} />

        {/* Placeholder for PDFViewer to call handleAreaSelect */}
        {/* <PDFViewer pdfFile={pdfDataUri} onAreaSelect={handleAreaSelect} /> */}
        <PDFViewer pdfFile={pdfDataUri} />

        {pdfFile && (
          <Box sx={{ my: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Signature button should ideally be enabled after area selection */}
            <SignatureButton onClick={handleOpenSignatureDialog} disabled={!pdfFile /*|| !selectedArea*/} />

            {signature && selectedArea && (
                <Typography variant="body2" color="green" sx={{mt: 1}}>Signature captured and area selected!</Typography>
            )}

            <Button
              variant="contained"
              color="secondary"
              onClick={handleDownloadSignedPdf}
              disabled={!pdfFile || !signature /*|| !selectedArea*/}
              sx={{mt: 1}}
            >
              Download Signed PDF (Placeholder)
            </Button>
          </Box>
        )}

        <SignatureDialog
          open={isSignatureDialogOpen}
          onClose={handleCloseSignatureDialog}
          onSaveSignature={handleSaveSignature}
        />

        {/* Example of how selectedArea might be visualized - for dev only */}
        {selectedArea && (
            <Box mt={2} p={1} sx={{border: '1px solid blue'}}>
                <Typography variant="caption">Selected Area (Dev): Page {selectedArea.pageIndex}, X: {selectedArea.x}, Y: {selectedArea.y}, W: {selectedArea.width}, H: {selectedArea.height}</Typography>
            </Box>
        )}
      </Paper>
    </Container>
  );
}

export default SignPDFPage;
