import React, { useState } from 'react';
import { 
  Box, Typography, Grid, Card, CardContent, Chip, Button, Paper, Tabs, Tab, Avatar, Tooltip, Stack, Divider 
} from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip as RechartsTooltip } from 'recharts';
import { 
  MdCheckCircle, MdWarning, MdError, MdHelpOutline, MdReplay, MdCalendarToday, 
  MdAssessment, MdGavel, MdCorporateFare 
} from 'react-icons/md';

// MOCK DATA
const mockDashboardData = {
  ngo_type: "Public Charitable Trust",
  deadlines: [
    { date: "2025-07-31", event: "Annual Return Filing (FCRA)" },
    { date: "2025-09-30", event: "Income Tax Return Filing" },
    { date: "2025-12-15", event: "Advance Tax Payment" },
  ]
};

const COLORS = { 
  'Compliant': '#2e7d32', 
  'Partial': '#ed6c02', 
  'Non-compliant': '#d32f2f', 
  'Not Addressed': '#616161' 
};

const getStatusChip = (status) => {
  const statusLower = status ? status.toLowerCase() : '';
  let icon, color;
  switch (statusLower) {
    case 'compliant':
      icon = <MdCheckCircle />; color = 'success'; break;
    case 'partial':
      icon = <MdWarning />; color = 'warning'; break;
    case 'non-compliant':
      icon = <MdError />; color = 'error'; break;
    default:
      icon = <MdHelpOutline />; color = 'default';
  }
  return (
    <Chip 
      icon={icon} 
      label={status || 'Not Addressed'} 
      color={color} 
      size="small" 
      variant="filled" 
      sx={{ 
        fontWeight: 600, 
        px: 1.5, 
        borderRadius: 1.5,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        backgroundColor: 'white',
        transition: 'all 0.2s ease-in-out'
      }} 
    />
  );
};

const ComplianceDashboard = ({ result, onReset }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event, newValue) => setTabIndex(newValue);

  const statusCounts = result.compliance_breakdown.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});
  const pieChartData = Object.keys(statusCounts).map(status => ({
    name: status,
    value: statusCounts[status],
  }));

  return (
    <Paper elevation={0} sx={{ 
      p: { xs: 2, md: 4 }, 
      background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)',
      border: '1.5px solid #bbdefb',
      borderRadius: 5,
      boxShadow: '0 8px 32px 0 rgba(33, 150, 243, 0.12)',
    }}>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: { xs: 'flex-start', md: 'center' }, 
          mb: 3, 
          flexWrap: 'wrap', 
          borderBottom: '1px solid #eee', 
          pb: 2 
        }}
      >
        <Typography variant="h4" fontWeight={900} sx={{ 
          mb: { xs: 2, md: 0 },
          letterSpacing: 1.2,
          color: 'primary.main',
          textShadow: '0 2px 6px rgba(33, 150, 243, 0.1)'
        }}>
          Compliance Analysis Report
        </Typography>
        <Button 
          variant="outlined" 
          startIcon={<MdReplay />} 
          onClick={onReset}
          sx={{ borderRadius: 2, fontWeight: 600 }}
        >
          Analyze Another
        </Button>
      </Box>

      <Tabs 
        value={tabIndex} 
        onChange={handleTabChange} 
        indicatorColor="primary" 
        textColor="primary" 
        variant="fullWidth" 
        sx={{ 
          mb: 3, 
          bgcolor: '#f5faff', 
          borderRadius: 3,
          boxShadow: '0 2px 8px rgba(33, 150, 243, 0.08)',
          '& button': { fontWeight: 700 }
        }}
      >
        <Tab icon={<MdAssessment />} label="Overall Summary" />
        <Tab icon={<MdGavel />} label="Clause Details" />
        <Tab icon={<MdCalendarToday />} label="Compliance Calendar" />
      </Tabs>

      {/* Tab 1: Overall Summary */}
      {tabIndex === 0 && (
        <Grid container spacing={4}>
          <Grid item xs={12} lg={7}>
            <Card sx={{
              height: '100%',
              boxShadow: '0 4px 16px 0 rgba(33, 150, 243, 0.12)',
              borderRadius: 4,
              border: '1.5px solid #bbdefb',
              background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)'
            }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Executive Summary
                </Typography>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
                  {result.executive_summary}
                </Typography>
                <Box 
                  sx={{ 
                    mt: 4, 
                    display: 'flex', 
                    alignItems: 'center', 
                    p: 2.5, 
                    backgroundColor: '#f3f6fa', 
                    borderRadius: 2 
                  }}
                >
                  <Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 56, height: 56 }}>
                    <MdCorporateFare size={32} />
                  </Avatar>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Identified NGO Type
                    </Typography>
                    <Typography variant="h5" fontWeight={700}>
                      {mockDashboardData.ngo_type}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Card sx={{
              height: '100%',
              boxShadow: '0 4px 16px 0 rgba(33, 150, 243, 0.12)',
              borderRadius: 4,
              border: '1.5px solid #bbdefb',
              background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)'
            }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={600} align="center" gutterBottom>
                  Compliance Status Breakdown
                </Typography>
                <ResponsiveContainer width="100%" height={260}>
                  <PieChart>
                    <Pie 
                      data={pieChartData} 
                      cx="50%" cy="50%" 
                      labelLine={false} 
                      innerRadius={60} 
                      outerRadius={100} 
                      fill="#8884d8" 
                      dataKey="value" 
                      paddingAngle={5}
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                  </PieChart>
                </ResponsiveContainer>
                <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                  {pieChartData.map((entry) => (
                    <Box key={entry.name} sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box 
                        sx={{ 
                          width: 16, height: 16, bgcolor: COLORS[entry.name], borderRadius: '50%', mr: 1 
                        }} 
                      />
                      <Typography variant="body2">{entry.name}</Typography>
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}

      {/* Tab 2: Clause Details */}
      {tabIndex === 1 && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {result.compliance_breakdown.map((item) => (
            <Card key={item.clause_id} variant="outlined" sx={{ 
              boxShadow: '0 4px 12px rgba(33, 150, 243, 0.08)', 
              borderRadius: 3, 
              border: '1.5px solid #bbdefb',
              background: 'linear-gradient(135deg, #f9fcff 0%, #ffffff 100%)'
            }}>
              <CardContent sx={{ p: 3.5 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                  <Typography variant="body2" color="text.secondary" fontWeight={500}>
                    {item.clause_id}
                  </Typography>
                  {getStatusChip(item.status)}
                </Box>
                <Typography variant="h6" component="p" sx={{ mb: 2, fontWeight: 600 }}>
                  {item.clause_text}
                </Typography>
                {item.evidence_in_policy && (
                  <Box 
                    sx={{ 
                      p: 2, 
                      backgroundColor: '#e8f5e9', 
                      borderRadius: 1, 
                      mb: 2, 
                      borderLeft: `4px solid ${COLORS.Compliant}` 
                    }}
                  >
                    <Typography variant="subtitle2" fontWeight={700}>
                      Evidence Found in Policy:
                    </Typography>
                    <Typography variant="body2" sx={{ fontStyle: 'italic', color: '#1b5e20' }}>
                      "{item.evidence_in_policy}"
                    </Typography>
                  </Box>
                )}
                <Box 
                  sx={{ 
                    p: 2, 
                    backgroundColor: '#e3f2fd', 
                    borderRadius: 1, 
                    borderLeft: '4px solid #1976d2' 
                  }}
                >
                  <Typography variant="subtitle2" fontWeight={700}>
                    AI Recommendation:
                  </Typography>
                  <Typography variant="body2">
                    {item.recommendation}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}

      {/* Tab 3: Compliance Calendar */}
      {tabIndex === 2 && (
        <Box>
          <Card sx={{ 
            boxShadow: 2, 
            borderRadius: 3,
            border: '1.5px solid #bbdefb',
            background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)'
          }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                Upcoming Compliance Deadlines
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Based on your NGO type and jurisdiction, here are key upcoming dates.
              </Typography>
              <Grid container spacing={3}>
                {mockDashboardData.deadlines.map((deadline, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper 
                      variant="outlined" 
                      sx={{ 
                        p: 3, 
                        textAlign: 'center', 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        borderRadius: 3, 
                        border: '1.5px solid #bbdefb',
                        background: 'linear-gradient(135deg, #e3f2fd 0%, #ffffff 100%)',
                        boxShadow: '0 4px 12px rgba(33, 150, 243, 0.1)'
                      }}
                    >
                      <Avatar 
                        sx={{ 
                          bgcolor: 'primary.main', 
                          mx: 'auto', 
                          width: 48, 
                          height: 48, 
                          mb: 1 
                        }}
                      >
                        <MdCalendarToday size={28} />
                      </Avatar>
                      <Typography variant="h4" color="primary" fontWeight={700}>
                        {new Date(deadline.date).toLocaleDateString('en-US', { day: '2-digit' })}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {new Date(deadline.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </Typography>
                      <Divider sx={{ my: 1.5 }} />
                      <Typography variant="body1" sx={{ flexGrow: 1 }}>
                        {deadline.event}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Box>
      )}
    </Paper>
  );
};

export default ComplianceDashboard;
