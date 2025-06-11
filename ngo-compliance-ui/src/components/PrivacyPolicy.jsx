import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Box 
      sx={{ 
        py: { xs: 4, sm: 6 }, 
        px: { xs: 2, sm: 3 },
        backgroundColor: 'background.default',
        minHeight: 'calc(100vh - 128px)', // Account for header and footer
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
            Privacy Policy
          </Typography>

          <Typography variant="subtitle1" gutterBottom align="center" color="text.secondary">
            Last updated: June 2025
          </Typography>

          <Typography variant="body1" paragraph>
            Welcome to <strong>RegulAid</strong>. We are committed to safeguarding the privacy of individuals who interact with our AI-based compliance platform. This Privacy Policy outlines the types of personal data we collect, how we use it, and the rights and choices available to users, in accordance with the applicable data protection laws of India and the United States.
          </Typography>

          <Typography variant="body1" paragraph>
            This Policy applies to all users of RegulAid, including NGOs and affiliated personnel who utilize our services in India and the United States.
          </Typography>

          <Typography variant="h6" gutterBottom>
            1. Data We Collect
          </Typography>
          <Typography variant="body1" paragraph>
            We collect and process the following categories of data:
          </Typography>
          <Typography variant="body1" paragraph>
            • <strong>Legal and Financial Documents:</strong> Documents uploaded for compliance analysis.
            <br />
            • <strong>Technical Data:</strong> Including IP addresses and usage metadata.
            <br />
            • <strong>Account Information:</strong> Names, email addresses, and credentials if user accounts are created.
          </Typography>

          <Typography variant="h6" gutterBottom>
            2. How We Use the Data
          </Typography>
          <Typography variant="body1" paragraph>
            We use the data solely for the following purposes:
            <br />
            • To perform compliance analysis.
            <br />
            • To improve and train our AI models (using anonymized or pseudonymized data where feasible).
            <br />
            • To communicate with users regarding system updates or inquiries.
            <br />
            • To fulfill legal and contractual obligations.
          </Typography>

          <Typography variant="h6" gutterBottom>
            3. Data Sharing
          </Typography>
          <Typography variant="body1" paragraph>
            We may share data with:
            <br />
            • <strong>Cloud and Hosting Providers:</strong> Such as Amazon Web Services (AWS).
            <br />
            • <strong>Third-party Tools:</strong> Used for model inference (e.g., LegalBERT). All processors are located within India or the United States and are contractually bound to adhere to data protection obligations.
          </Typography>

          <Typography variant="h6" gutterBottom>
            4. Data Security
          </Typography>
          <Typography variant="body1" paragraph>
            Data is stored on secure cloud infrastructure. We implement industry-standard measures to protect against unauthorized access, alteration, and disclosure. Detailed security protocols will be published upon internal finalization.
          </Typography>

          <Typography variant="h6" gutterBottom>
            5. Legal Basis for Processing
          </Typography>
          <Typography variant="body1" paragraph>
            We rely on user consent as the primary legal basis for processing personal data, obtained via affirmative acceptance of our Terms and Conditions. We also ensure compliance with:
            <br />
            • The Digital Personal Data Protection Act, 2023 (India).
            <br />
            • The California Consumer Privacy Act (CCPA), where applicable.
          </Typography>

          <Typography variant="h6" gutterBottom>
            6. User Rights
          </Typography>
          <Typography variant="body1" paragraph>
            Users may:
            <br />
            • Request access to their data.
            <br />
            • Request correction or deletion of their data.
            <br />
            • Object to or restrict certain data processing activities.
            <br />
            To exercise these rights, please contact us at <strong>[Insert Contact Email]</strong>.
          </Typography>

          <Typography variant="h6" gutterBottom>
            7. Children’s Privacy
          </Typography>
          <Typography variant="body1" paragraph>
            RegulAid is not intended for individuals under the age of 18. We do not knowingly collect personal data from minors.
          </Typography>

          <Typography variant="h6" gutterBottom>
            8. Cookies and Analytics
          </Typography>
          <Typography variant="body1" paragraph>
            We may use cookies and third-party analytics tools for functionality and usage analysis. Users will be notified and can manage cookie preferences through our website interface.
          </Typography>

          <Typography variant="h6" gutterBottom>
            9. Data Transfers
          </Typography>
          <Typography variant="body1" paragraph>
            As all data processors are located within India and the United States, international transfers are not conducted beyond these jurisdictions.
          </Typography>

          <Typography variant="h6" gutterBottom>
            10. Policy Updates
          </Typography>
          <Typography variant="body1" paragraph>
            We may update this Privacy Policy from time to time. Material changes will be communicated through appropriate channels.
          </Typography>

          <Typography variant="h6" gutterBottom>
            11. Contact Us
          </Typography>
          <Typography variant="body1" paragraph>
            For questions or concerns about this Privacy Policy, please contact:
            <br />
            <strong>RegulAid</strong><br />
            <strong>Email:</strong> support@regulaid.com<br />
            <strong>Website:</strong> www.regulaid.com
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
// This code defines a Privacy Policy component for the NGO compliance tool, RegulAid.