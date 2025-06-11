import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  TextField, 
  Button, 
  Card, 
  CardContent,
  Stack,
  Alert,
  Snackbar,
  IconButton,
  Divider
} from '@mui/material';
    import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';



const ContactInfo = ({ icon, title, content }) => (
  <Card sx={{ 
    height: '100%',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px 0 rgba(33, 150, 243, 0.1)',
    border: '1px solid rgba(25, 118, 210, 0.1)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 48px 0 rgba(33, 150, 243, 0.2)',
    }
  }}>
    <CardContent>
      <Stack spacing={2} alignItems="center" textAlign="center">
        <Box sx={{ 
          color: 'primary.main', 
          bgcolor: 'primary.lighter',
          p: 2.5,
          borderRadius: '50%',
          transform: 'rotate(0deg)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'rotate(360deg)',
          }
        }}>
          {React.cloneElement(icon, { size: 28 })}
        </Box>
        <Typography 
          variant="h6" 
          gutterBottom 
          sx={{ 
            fontWeight: 600,
            color: 'text.primary'
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ 
            whiteSpace: 'pre-line',
            lineHeight: 1.8
          }}
        >
          {content}
        </Typography>
      </Stack>
    </CardContent>
  </Card>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: Implement actual form submission
      console.log('Form submitted:', formData);
      
      // Show success message
      setSnackbar({
        open: true,
        message: 'Thank you for your message! We will get back to you soon.',
        severity: 'success'
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box 
      sx={{ 
        py: { xs: 6, sm: 8 }, 
        px: { xs: 2, sm: 3 },
        backgroundColor: 'background.default',
        minHeight: 'calc(100vh - 128px)',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)'
      }}
    >
      <Container maxWidth="lg">
        <Box mb={6} textAlign="center">
          <Typography 
            variant="h3" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Get in Touch
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
            We'd love to hear from you. Please fill out this form or use our contact information below.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Information Section - Moved to top on mobile */}
          <Grid item xs={12} md={5} sx={{ order: { xs: 1, md: 2 }}}>
            <Stack spacing={3}>              <ContactInfo
                icon={<LocationOnIcon />}
                title="Visit Us"
                content="DTCC Innovation Labs\nBangalore, India"
              />
              <ContactInfo
                icon={<EmailIcon />}
                title="Email Us"
                content="support@dtcc.com\nhelp@dtcc.com"
              />
              <ContactInfo
                icon={<PhoneIcon />}
                title="Call Us"
                content="+91 (80) 4567-8900\nMon-Fri 9:00 AM - 6:00 PM IST"
              />
            </Stack>
            
            {/* Social Media Links */}
            <Box mt={4} textAlign="center">
              <Divider sx={{ mb: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  Follow Us
                </Typography>
              </Divider>              <Stack 
                direction="row" 
                spacing={2} 
                justifyContent="center"
                sx={{ opacity: 0.9 }}
              >                <IconButton
                  sx={{
                    color: 'primary.main',
                    '&:hover': {
                      color: 'primary.dark',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: 'primary.main',
                    '&:hover': {
                      color: 'primary.dark',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: 'primary.main',
                    '&:hover': {
                      color: 'primary.dark',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: 'primary.main',
                    '&:hover': {
                      color: 'primary.dark',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.2s ease-in-out'
                  }}
                >
                  <LanguageIcon />
                </IconButton>
              </Stack>
            </Box>
          </Grid>

          {/* Contact Form Section */}
          <Grid item xs={12} md={7} sx={{ order: { xs: 2, md: 1 }}}>
            <Paper 
              elevation={0}
              sx={{ 
                p: { xs: 3, sm: 4 }, 
                borderRadius: 3,
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px 0 rgba(33, 150, 243, 0.1)'
              }}
            >
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      error={!!errors.firstName}
                      helperText={errors.firstName}
                      variant="outlined"
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          }
                        }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      error={!!errors.lastName}
                      helperText={errors.lastName}
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      variant="outlined"
                      type="email"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      error={!!errors.subject}
                      helperText={errors.subject}
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      error={!!errors.message}
                      helperText={errors.message}
                      variant="outlined"
                      multiline
                      rows={4}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button 
                      type="submit"
                      variant="contained" 
                      size="large"
                      fullWidth
                      sx={{ 
                        py: 1.5,
                        fontWeight: 600,
                        background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
                        boxShadow: '0 8px 16px 0 rgba(25, 118, 210, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #1565c0, #1976d2)',
                          transform: 'translateY(-1px)',
                          boxShadow: '0 12px 20px 0 rgba(25, 118, 210, 0.4)',
                        },
                        transition: 'all 0.2s ease-in-out'
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          variant="filled"
          sx={{ 
            width: '100%',
            boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.1)'
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;