import {
  Avatar,
  Box,
  Divider,
  Paper,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import {
  MdAutoFixHigh,
  MdInfoOutline,
  MdInsights,
  MdSecurity
} from 'react-icons/md';

const AboutApp = () => {
  const theme = useTheme();

  const sections = [
    {
      title: "What This App Does",
      icon: <MdInfoOutline size={28} />,
      content:
        "This application analyzes uploaded compliance-related documents and generates a detailed compliance report tailored to NGO regulations like FCRA, Income Tax, and CSR."
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
        "The tool is regularly updated to match the latest legal frameworks and regulatory deadlines applicable to NGOs."
    }
  ];

  return (
    <Paper
      elevation={3}
      sx={{
        mt: 6,
        p: { xs: 3, md: 5 },
        borderRadius: 'var(--border-radius)',
        backgroundColor: 'var(--card-bg)',
        color: 'var(--text-main)',
        boxShadow: 'var(--shadow)',
        border: '1px solid #262a40',
        backdropFilter: 'blur(8px)',
        maxWidth: 900,
        mx: 'auto'
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        gutterBottom
        sx={{ textAlign: 'center', color: 'var(--primary-dark)' }}
      >
        About This Application
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          mb: 4,
          maxWidth: 800,
          mx: 'auto',
          color: 'var(--text-muted)'
        }}
      >
        A compliance assistant for NGOs — making legal reviews simple, fast, and accessible. Understand where your organization stands and what you can do to improve.
      </Typography>

      <Stack spacing={4}>
        {sections.map((section, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              gap: 3,
              background: 'rgba(56,189,248,0.04)',
              borderRadius: 3,
              p: 2.5,
              alignItems: 'flex-start',
              border: '1px solid #23263a'
            }}
          >
            <Avatar
              sx={{
                bgcolor: 'var(--primary)',
                color: '#fff',
                width: 56,
                height: 56,
                mt: 0.5,
                boxShadow: '0 2px 12px 0 rgba(99, 102, 241, 0.10)'
              }}
            >
              {section.icon}
            </Avatar>
            <Box>
              <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: 'var(--primary)' }}>
                {section.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'var(--text-muted)' }}>
                {section.content}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>

      <Divider sx={{ my: 4, borderColor: '#23263a' }} />

      <Typography
        variant="body2"
        sx={{ textAlign: 'center', color: 'var(--text-muted)' }}
      >
        This tool is part of a broader effort to promote transparency and compliance among NGOs. It’s currently in beta. For feedback or contributions, please reach out to the development team.
      </Typography>
    </Paper>
  );
};

export default AboutApp;
