import { Paper, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip } from '@mui/material';

// Function to determine the color of the status chip
const getStatusColor = (status) => {
  switch (status?.toLowerCase()) {
    case 'compliant':
      return 'success';
    case 'partial':
      return 'warning';
    case 'non-compliant':
      return 'error';
    case 'missing':
      return 'error';
    default:
      return 'default';
  }
};

function ComplianceDashboard({ result }) {
  if (!result) return null;

  return (
    <Paper elevation={3} sx={{ mt: 4, p: 3 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Compliance Analysis Report
      </Typography>

      {/* Executive Summary Section */}
      <Box sx={{ mb: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
        <Typography variant="h6">Executive Summary</Typography>
        <Typography variant="body1">{result.executive_summary}</Typography>
      </Box>

      {/* Overall Score */}
       <Box sx={{ mb: 3, textAlign: 'center' }}>
        <Typography variant="h6">Overall Compliance Score</Typography>
        <Typography variant="h3" color="primary">{result.overall_compliance_score} / 100</Typography>
      </Box>


      {/* Compliance Breakdown Table */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="compliance breakdown table">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#eeeeee' }}>
              <TableCell>Area</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Analysis</TableCell>
              <TableCell>Recommendation</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result.compliance_breakdown?.map((item, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {item.area}
                </TableCell>
                <TableCell>
                  <Chip label={item.status} color={getStatusColor(item.status)} />
                </TableCell>
                <TableCell>{item.analysis}</TableCell>
                <TableCell>{item.recommendation}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default ComplianceDashboard;