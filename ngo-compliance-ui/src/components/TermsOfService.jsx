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
            Terms and Conditions of Use
          </Typography>

          <Typography variant="subtitle1" gutterBottom align="center" color="text.secondary">
            Effective Date: June 2025
          </Typography>

          <Typography variant="body1" paragraph>
            Welcome to <strong>POLI-SEE</strong>, an AI-driven compliance tool developed to assist users, particularly non-governmental organizations (NGOs), in reviewing policy documents and identifying potential compliance risks.
          </Typography>

          <Typography variant="body1" paragraph>
            By accessing or using POLI-SEE, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use this service.
          </Typography>

          <Typography variant="h6" gutterBottom>
            1. Service Description
          </Typography>
          <Typography variant="body1" paragraph>
            POLI-SEE provides AI-based document analysis, compliance checks, and risk flagging. It is not intended to provide legal advice or serve as a substitute for legal counsel. The service is offered solely for informational and operational support purposes within the jurisdictions of India and the United States.
          </Typography>

          <Typography variant="h6" gutterBottom>
            2. User Eligibility
          </Typography>
          <Typography variant="body1" paragraph>
            This service is intended solely for use by NGOs operating within India and the United States. By using POLI-SEE, you represent and warrant that you have the authority to bind the entity on whose behalf you are using the service.
          </Typography>

          <Typography variant="h6" gutterBottom>
            3. Data Handling
          </Typography>
          <Typography variant="body1" paragraph>
            Users may submit policy-related documents for analysis. POLI-SEE does not store or retain user-submitted data beyond the duration necessary for processing. Basic safeguards and AI guardrails are implemented to mitigate unauthorized data use or exposure. However, users are responsible for ensuring that submitted content does not contain personally identifiable information, trade secrets, or confidential data.
          </Typography>

          <Typography variant="h6" gutterBottom>
            4. Intellectual Property
          </Typography>
          <Typography variant="body1" paragraph>
            All rights, title, and interest in the POLI-SEE platform, including its methodologies, interfaces, and algorithms, are owned by the provider. Users retain rights to their original input content. The output generated may be used, reproduced, or modified by users for internal organizational purposes, but not for commercial redistribution without prior written consent.
          </Typography>

          <Typography variant="h6" gutterBottom>
            5. No Warranties
          </Typography>
          <Typography variant="body1" paragraph>
            While POLI-SEE aims to enhance document analysis and compliance screening, it operates based on probabilistic models and may generate incorrect or incomplete outputs. All outputs are provided “as is,” without warranties of any kind, express or implied. Users must independently verify the results and should consult qualified legal professionals where necessary.
          </Typography>

          <Typography variant="h6" gutterBottom>
            6. Compliance Responsibilities
          </Typography>
          <Typography variant="body1" paragraph>
            Users are responsible for ensuring that their use of POLI-SEE complies with applicable laws and regulations, including but not limited to the Information Technology Act (India), HIPAA (USA), and any relevant AI governance standards. The service is designed in alignment with recognized legal and ethical AI principles, including transparency, accountability, and fairness.
          </Typography>

          <Typography variant="h6" gutterBottom>
            7. Limitation of Liability
          </Typography>
          <Typography variant="body1" paragraph>
            To the maximum extent permitted by law, POLI-SEE and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages, including loss of data, profits, or business opportunities, arising out of or in connection with the use of the service. Liability for direct damages, if any, shall be limited to the amount paid by the user for the service in the twelve (12) months preceding the claim.
          </Typography>

          <Typography variant="h6" gutterBottom>
            8. Indemnification
          </Typography>
          <Typography variant="body1" paragraph>
            Users agree to indemnify and hold harmless the service provider and its affiliates from and against any claims, liabilities, damages, losses, and expenses arising out of or in connection with: (a) use of POLI-SEE in violation of these Terms, or (b) violation of any third-party rights, including intellectual property or data protection rights.
          </Typography>

          <Typography variant="h6" gutterBottom>
            9. Governing Law and Dispute Resolution
          </Typography>
          <Typography variant="body1" paragraph>
            These Terms shall be governed by the laws of the Republic of India, without regard to its conflict of law principles. Any disputes arising from or relating to these Terms shall be resolved through binding arbitration in New Delhi, India in accordance with applicable arbitration rules.
          </Typography>

          <Typography variant="h6" gutterBottom>
            10. Modifications
          </Typography>
          <Typography variant="body1" paragraph>
            POLI-SEE reserves the right to amend these Terms at any time. Continued use of the service after the publication of changes constitutes acceptance of the modified Terms.
          </Typography>

          <Typography variant="h6" gutterBottom>
            11. Contact Information
          </Typography>
          <Typography variant="body1" paragraph>
            For inquiries regarding these Terms and Conditions, please contact us at <strong>support@polisee.com</strong>.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;




