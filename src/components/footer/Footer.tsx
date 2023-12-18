import React from "react";
import { Box, Container, Typography, Grid, Link } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "primary.main", py: 6, color: "white" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Forest and Animal Disaster Management
            </Typography>
            <Typography variant="subtitle1">
              Helping to protect our wildlife and forests.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Link href="#" sx={{ color: "white", textDecoration: "none" }}>
              Link One
            </Link>
            <br />
            <Link href="#" sx={{ color: "white", textDecoration: "none" }}>
              Link Two
            </Link>
            <br />
            <Link href="#" sx={{ color: "white", textDecoration: "none" }}>
              Link Three
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              Address: 1234 Street, City
              <br />
              Phone: (123) 456-7890
              <br />
              Email: contact@example.com
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
