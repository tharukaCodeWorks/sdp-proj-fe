import { Typography, Container, Box } from "@mui/material";
import { FC } from "react";

export const NotFoundPage: FC = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: "center", marginTop: 8 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          404 - Page Not Found
        </Typography>
        <Typography variant="subtitle1">
          Sorry, the page you are looking for does not exist.
        </Typography>
      </Box>
    </Container>
  );
};
