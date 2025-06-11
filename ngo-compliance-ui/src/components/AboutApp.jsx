import React from 'react';
import {
  Paper,
  Box,
  Typography,
  Stack,
  Avatar,
  Divider,
  useTheme
} from '@mui/material';
import {
  MdSecurity,
  MdInsights,
  MdAutoFixHigh,
  MdInfoOutline
} from 'react-icons/md';

const AboutApp = () => {
  const theme = useTheme();

  const sections = [
    {
      title: "What This App Does",
      icon: <MdInfoOutline size={28} />,
      content:
        "This application analyzes uploaded compliance-related documents and generates a detailed compliance report tailored to Indian NGO regulations like FCRA, Income Tax, and CSR."
    },
    {
      title: "Smart AI-Powered Insights",
      icon: <MdInsights size={28} />,
      content:
        "Using advanced AI models, we extract clause-level evidence, identify gaps, and provide actionable recommendations — helping NGOs stay audit-ready."
    },
    {
      title: "Privacy & Data Security",
      icon: <MdSecurity size={28} />,
      content:
        "Uploaded files are processed securely. We do not store your data post-analysis, ensuring confidentiality and compliance with best practices."
    },
    {
      title: "Continuous Updates",
      icon: <MdAutoFixHigh size={28} />,
      content:
        "The tool is regularly updated to match the latest legal frameworks and regulatory deadlines applicable to Indian NGOs."
    }
  ];

  return (
    <Paper
      elevation={2}
      sx={{
        mt: 6,
        p: { xs: 3, md: 5 },
        borderRadius: 4,
        backgroundColor: theme.palette.background.default,
        boxShadow: theme.shadows[2]
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        gutterBottom
        sx={{ textAlign: 'center' }}
      >
        About This Application
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ textAlign: 'center', mb: 4, maxWidth: 800, mx: 'auto' }}
      >
        A compliance assistant for Indian NGOs — making legal reviews simple, fast, and accessible. Understand where your organization stands and what you can do to improve.
      </Typography>

      <Stack spacing={4}>
        {sections.map((section, index) => (
          <Box key={index} sx={{ display: 'flex', gap: 3 }}>
            <Avatar
              sx={{
                bgcolor: 'primary.main',
                width: 48,
                height: 48,
                mt: 0.5
              }}
            >
              {section.icon}
            </Avatar>
            <Box>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {section.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {section.content}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>

      <Divider sx={{ my: 4 }} />

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: 'center' }}
      >
        This tool is part of a broader effort to promote transparency and compliance among NGOs operating in India. It’s currently in beta. For feedback or contributions, please reach out to the development team.
      </Typography>
    </Paper>
  );
};

export default AboutApp;
