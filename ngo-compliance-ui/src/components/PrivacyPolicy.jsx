import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Box 
      sx={{ 
        py: { xs: 4, sm: 6 }, 
        px: { xs: 2, sm: 3 },
        backgroundColor: 'background.default',
        minHeight: 'calc(100vh - 128px)',
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }}
    >
      <Container maxWidth="lg">
        <Paper 
          elevation={3} 
          sx={{ 
            p: { xs: 3, sm: 4 }, 
            borderRadius: 3,
            backgroundImage: 'linear-gradient(135deg, #ffffff 0%, #f8faff 100%)',
            boxShadow: '0 8px 32px 0 rgba(33, 150, 243, 0.1)'
          }}
        >
          <Typography variant="h4" gutterBottom align="center">
            Privacy Policy for Poli-See
          </Typography>

          <Typography variant="subtitle1" gutterBottom align="center" color="text.secondary">
            Last Updated: June 2025
          </Typography>

          <Typography variant="body1" paragraph>
            Welcome to <strong>Poli-See</strong>. We are an AI-powered regulatory compliance checking tool designed specifically for non-governmental organizations (NGOs) and non-profit organizations (NPOs). This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our services.
          </Typography>

          <Typography variant="body1" paragraph>
            This Privacy Policy applies to all users of Poli-See across our supported jurisdictions, including India, the United States, the European Union, the United Kingdom, and Singapore.
          </Typography>

          <Typography variant="body1" paragraph>
            We collect documents (e.g., policies, reports) uploaded by users for the purpose of regulatory compliance review. We may collect metadata associated with document uploads and general usage data for performance and security monitoring purposes.
          </Typography>

          <Typography variant="body1" paragraph>
            The information you provide is used solely for the operation of our AI compliance tool. Specifically:
          </Typography>
          <Typography variant="body1" paragraph>
            • To analyze uploaded documents and provide compliance assessments;<br />
            • To ensure proper functioning of the platform;<br />
            • To improve user experience (non-personal, aggregated data only).
          </Typography>

          <Typography variant="h6" gutterBottom>
            Data Sharing and Subprocessors
          </Typography>
          <Typography variant="body1" paragraph>
            We use third-party service providers, including Amazon Web Services (AWS) for cloud infrastructure and Claude AI 3 for AI processing.
          </Typography>
          <Typography variant="body1" paragraph>
            These providers may have access to data solely for the purpose of providing their contracted services.
          </Typography>
          <Typography variant="body1" paragraph>
            We do not sell or share user data for advertising or commercial gain.
          </Typography>

          <Typography variant="h6" gutterBottom>
            User Rights
          </Typography>
          <Typography variant="body1" paragraph>
            Users have the right to:
          </Typography>
          <Typography variant="body1" paragraph>
            • Access, correct, or delete their uploaded data;<br />
            • Request information on how their data has been used;<br />
            • Contact us at <strong>[Insert Contact Email]</strong> to exercise these rights.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Data Security
          </Typography>
          <Typography variant="body1" paragraph>
            Data is protected using industry-standard security measures provided by AWS.
          </Typography>
          <Typography variant="body1" paragraph>
            Uploaded documents are stored securely, and access is restricted to authorized personnel only.
          </Typography>
          <Typography variant="body1" paragraph>
            Encryption protocols are employed where applicable.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Data Retention
          </Typography>
          <Typography variant="body1" paragraph>
            User data is retained only as long as necessary to fulfill the services provided.
          </Typography>
          <Typography variant="body1" paragraph>
            Users may request deletion of their data at any time. We aim to comply within 30 days of such requests.
          </Typography>
          <Typography variant="body1" paragraph>
            We are currently formalizing an automatic deletion policy.
          </Typography>

          <Typography variant="body1" paragraph>
            We do not use cookies or other tracking technologies for marketing or profiling purposes.
          </Typography>

          <Typography variant="body1" paragraph>
            Data may be processed in jurisdictions outside your own. In such cases, we ensure appropriate safeguards are in place in accordance with applicable data protection laws.
          </Typography>

          <Typography variant="body1" paragraph>
            We may update this Privacy Policy from time to time. Users will be notified of any material changes.
          </Typography>

          <Typography variant="body1" paragraph>
            For any questions or concerns regarding this Privacy Policy, please contact us at:<br />
            <strong>support@polisee.com</strong><br />
            <strong>www.polisee.com</strong>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
