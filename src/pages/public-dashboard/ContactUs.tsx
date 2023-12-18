// ContactUs.tsx

import React from 'react';
import { FC } from 'react';
import { PublicUserLayout } from '../../components';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

const ContactUs: FC = () => {
  return (
    <PublicUserLayout>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 4 }}>
          Contact Us
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Your Message"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" size="large">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Container>
    </PublicUserLayout>
  );
};

export default ContactUs;
