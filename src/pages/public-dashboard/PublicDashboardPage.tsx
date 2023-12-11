import React, { FC } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const PublicDashboardPage: FC = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/auth/login");
  };

  const handleSignUp = () => {
    navigate("/auth/signup");
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, textAlign: "center" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Forest and Animal Disaster Management
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Help protect our wildlife and forests
        </Typography>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="Forest and Wildlife"
          src="/assets/images/forest-wildlife.png" // Replace with a suitable image URL
        />
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Button variant="contained" color="primary" onClick={handleSignIn}>
            Sign In
          </Button>
          <Button variant="outlined" color="primary" onClick={handleSignUp}>
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

