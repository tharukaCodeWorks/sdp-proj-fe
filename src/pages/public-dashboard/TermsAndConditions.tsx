// TermsAndConditions.tsx

import React from 'react';
import { FC } from 'react';
import { PublicUserLayout } from '../../components';
import { Container, Typography } from '@mui/material';

const TermsAndConditions: FC = () => {
  return (
    <PublicUserLayout>
      <Container maxWidth="md">
        <Typography variant="h3" component="h1" sx={{ fontWeight: 700, mb: 4 }}>
          Terms and Conditions
        </Typography>

        <Typography variant="body1" paragraph>
          Welcome to [Your Organization Name]! By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. If you disagree with any part of these terms, please do not use our website.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
          1. Acceptance of Terms
        </Typography>

        <Typography variant="body1" paragraph>
          By accessing this website, you are agreeing to be bound by these website terms and conditions, all applicable laws, and regulations, and agree that you are responsible for compliance with any applicable local laws.
        </Typography>

        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
          2. Use License
        </Typography>

        <Typography variant="body1" paragraph>
          Permission is granted to temporarily download one copy of the materials on [Your Organization Name]'s website for personal, non-commercial transitory viewing only.
        </Typography>

        {/* Add more terms and conditions sections as needed */}

        <Typography variant="body1" paragraph>
          [Your Organization Name] reserves the right to make changes to these terms and conditions at any time. Your continued use of the website after any changes to these terms and conditions constitutes acceptance of those changes.
        </Typography>

        {/* Add more content or sections as needed */}
      </Container>
    </PublicUserLayout>
  );
};

export default TermsAndConditions;
