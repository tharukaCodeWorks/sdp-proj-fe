// AboutUs.tsx

import React from 'react';
import { FC } from 'react';
import { PublicUserLayout } from '../../components';
import { Container, Typography } from '@mui/material';

const AboutUs: FC = () => {
  return (
    <PublicUserLayout>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 4 }}>
          About Us
        </Typography>

        <Typography variant="body1" paragraph>
          Welcome to [Your Organization Name]! We are a dedicated team committed to [brief description of your organization's mission].
        </Typography>

        <Typography variant="body1" paragraph>
          Our missionn is to [provide a concise statement of your organization's mission and goals]. We strive to [highlight key objectives or values].
        </Typography>

        <Typography variant="body1" paragraph>
          At [Your Organization Name], we believe in [core values or principles]. We aim to make a positive impact on [specific areas or communities].
        </Typography>

        <Typography variant="body1" paragraph>
          What sets us apart is our passion for [mention any unique aspects or initiatives]. Through [your organization's activities or projects], we aim to [desired impact or outcome].
        </Typography>

        <Typography variant="body1" paragraph>
          Join us on our journey to [achieving a shared vision]. Whether you're a supporter, volunteer, or partner, together we can make a difference.
        </Typography>

        {/* Add more content or sections as needed */}
      </Container>
    </PublicUserLayout>
  );
};

export default AboutUs;
