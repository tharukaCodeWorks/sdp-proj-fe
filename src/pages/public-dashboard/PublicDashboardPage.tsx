import React from "react";
import { FC } from "react";
import { Box, Container, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { PublicUserLayout } from "../../components";

export const PublicDashboardPage: FC = () => {
  return (
    <PublicUserLayout>
    <Box
      sx={{
        backgroundImage: `url('https://cdn.wallpapersafari.com/24/54/6ph8zU.jpg')`,// Set your preferred background color
        backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "80px",
          paddingBottom: "80px",
          textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" color="#f0f0f0" sx={{ fontWeight: 700, mb: 2 }}>
          Welcome to Our Amazing App
        </Typography>
        <Typography variant="h5" component="h2" color="#f0f0f0" sx={{ mb: 4 }}>
          Explore the possibilities and make a difference in the world.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started 
        </Button>
      </Container>
    </Box>

 {/* Add the Grid for the cards */}
 <Container maxWidth="md" sx={{ marginTop: "40px" }}>
        <Grid container spacing={3}>
          {/* Card 1 */}
          <Grid item xs={12} sm={4}>
            <CardComponent
              title="Card 1"
              content="Content for Card 1"
              buttonText="Button 1"
            />
          </Grid>

          {/* Card 2 */}
          <Grid item xs={12} sm={4}>
            <CardComponent
              title="Card 2"
              content="Content for Card 2"
              buttonText="Button 2"
            />
          </Grid>

          {/* Card 3 */}
          <Grid item xs={12} sm={4}>
            <CardComponent
              title="Card 3"
              content="Content for Card 3"
              buttonText="Button 3"
            />
          </Grid>
        </Grid>

        <br></br>
        <Container maxWidth="md" sx={{ marginTop: "40px" }}>
        {/* Description */}
        <Typography variant="body1" color="text.secondary" paragraph>
          This is a new container with a description. Customize this text based on your content.
        </Typography>

        {/* ... rest of your content for this container */}
      </Container>





</Container>

  </PublicUserLayout>
);
};

const CardComponent: FC<{ title: string; content: string; buttonText: string }> = ({ title, content, buttonText }) => {
  return (
    <Card sx={{ maxWidth: 345, width: "100%" }}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {content}
        </Typography>
        {/* Button inside the card */}
        <Box sx={{ marginTop: 2 }}>
          <Button variant="contained" color="primary">
            {buttonText}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
