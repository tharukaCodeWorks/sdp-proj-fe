// PrivacyPolicy.tsx

import React from 'react';
import { FC } from 'react';
import { PublicUserLayout } from '../../components';
import { Container, Typography } from '@mui/material';

const PrivacyPolicy: FC = () => {
  return (
    <PublicUserLayout>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 4 }}>
          Privacy Policy
        </Typography>

        <Typography variant="body1" paragraph>
          [Your Organization Name] is committed to protecting your privacy. This Privacy Policy governs the manner in which we collect, use, maintain, and disclose information collected from users of our website.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
          Information We Collect
        </Typography>

        <Typography variant="body1" paragraph>
          We may collect personal identification information from users in various ways, including, but not limited to, when users visit our site, register on the site, subscribe to newsletters, fill out a form, and in connection with other activities, services, features, or resources we make available on our site.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
          How We Use Collected Information
        </Typography>

        <Typography variant="body1" paragraph>
          [Your Organization Name] may collect and use users' personal information for the following purposes:
        </Typography>

        <ul>
          <li>To personalize user experience</li>
          <li>To improve our site</li>
          <li>To send periodic emails</li>
        </ul>

        {/* Add more sections as needed */}

        <Typography variant="body1" paragraph>
          By using our site, you agree to the collection and use of information in accordance with this Privacy Policy.
        </Typography>

        {/* Add more content or sections as needed */}
      </Container>
    </PublicUserLayout>
  );
};

export default PrivacyPolicy;
