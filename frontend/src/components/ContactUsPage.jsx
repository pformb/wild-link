import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

function ContactUsPage() {
    return (
        <Box  style={{ paddingTop: '100px' }} sx={{ p: 3 }}>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4" gutterBottom>Contact Us</Typography>
                <Typography variant="body1">If you need assistance, please contact the following:</Typography>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ p: 2, border: '1px solid grey', borderRadius: 2 }}>
                        <Typography variant="h5" gutterBottom>Join Us!</Typography>
                        <Typography variant="body1">For organizations interested in joining our platform, please contact us at <span style={{ color: 'blue' }}>join@wildlink.com</span></Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ p: 2, border: '1px solid grey', borderRadius: 2 }}>
                        <Typography variant="h5" gutterBottom>Need Help?</Typography>
                        <Typography variant="body1">If you need any assistance or have general inquiries, feel free to reach out to us at <span style={{ color: 'blue' }}>help@wildlink.com</span></Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ContactUsPage;