import React from "react";
import { FC } from "react";
import { Box, Container, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { PublicUserLayout } from "../../components";



export const PublicDashboardPage: FC = () => {
  return (
    <PublicUserLayout>
       <Box
      sx={{
        backgroundImage: `url('https://www.synotrip.com/sites/default/files/styles/900x900/public/355977/29793_medium.jpg?itok=EzDy8FTy')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '80px',
        paddingBottom: '80px',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <Container
      maxWidth="md"
      sx={{
        backgroundColor: 'rgba(40 40 40 / 35%)', // Light transparent white color
        padding: '40px', // Adjust padding as needed
        borderRadius: '8px', // Optional: Add border-radius for rounded corners
      }}
    >
      <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 2, color: '#cecffc' }}>
        Welcome to FAD Management System
      </Typography>
      <Typography variant="h5" component="h2" sx={{ mb: 4, color: '#cecffc' }}>
        Explore the possibilities and make a difference in the world.
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Get Started
      </Button>
    </Container>
    </Box>

 {/* Add the Grid for the cards */}
 <Box
 
  sx={{
    backgroundImage: `url('https://www.bhmpics.com/downloads/white-leaves-wallpaper/4.casadeco-leaves-white-wallpaper-tiled-160062.jpg')`,
   
 

  }}
>
<Container
  maxWidth="lg"
  sx={{
    marginTop: "40px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "20px", // Adjust padding as needed
  }}
>
  <Grid container spacing={5}>
    {/* Card 1 */}
    <Grid item xs={12} sm={4}>
      <CardComponent
        title="Wildlife Conservation"
        content="File a new complaint related to Wildlife here. "
        buttonText="New Complaint"
      />
    </Grid>

    {/* Card 2 */}
    <Grid item xs={12} sm={4}>
      <CardComponent
        title="Forest Conservation"
        content="File a new complaint related to Forest here. "
        buttonText="New Complaint"
      />
    </Grid>

    {/* Card 3 */}
    <Grid item xs={12} sm={4}>
      <CardComponent
        title="Complaint Status"
        content="View your complaint status"
        buttonText="View"
      />
    </Grid>
  </Grid>
</Container>
</Box>
<br></br><br></br>


        <Box
  sx={{
    backgroundImage: `url('https://wallpaper-house.com/data/out/12/wallpaper2you_498888.jpg')`,// Set your preferred background color
    backgroundSize: "cover",
      backgroundPosition: "center",
      paddingTop: "80px",
      paddingBottom: "80px",
      textAlign: "center",
  }}
>
  <Container
    maxWidth="lg"
    sx={{
      backgroundColor: "rgba(2 87 14 / 80%)", // Set the background color with opacity
      color: "#f4f4f4", // Set the text color (Off white)
      textAlign: "center", // Center-align the content
      padding: "40px", // Add padding for better aesthetics
    }}
  >
    {/* Heading */}
    <Typography variant="h3" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
      The Forest and Wildlife Management
    </Typography>

    {/* Description */}
    <Typography variant="body1" color="f4f4f4" paragraph>
      The Forest and Wildlife Management departments are dedicated to the conservation of wildlife and forests. These departments play a crucial role in safeguarding the natural environment by providing essential services related to wildlife and forest protection. They actively address and manage complaints related to their respective departments, ensuring a prompt and effective response to any concerns raised by the community.

      In addition to handling complaints, these departments monitor the progress of each complaint and generate comprehensive reports. These reports contribute to informed decision-making processes, both for actions already taken and for future considerations. The commitment of these departments to wildlife and forest conservation is vital for maintaining ecological balance and promoting sustainable practices.
    </Typography>

    {/* ... rest of your content for this container */}
  </Container>
</Box>

<Box
        sx={{
          backgroundColor: '#f0f8ff', // Sky Blue
          height: '100vh', // Full screen height
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
         {/* Left Layout */}
         <Container
          maxWidth="md"
          sx={{
            border: '4px solid #87ceeb', // Sky Blue
            borderRadius: '8px',
            marginRight: '16px', // Adjust as needed
            padding: 0, // Set padding to 0
            backgroundColor: 'white',
            height: '90%',
          }}
        ><br></br><br></br>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Latest News: Leopards Spotted in the Wild!
          </Typography>
          <img
            src="https://i.natgeofe.com/k/52c8bc84-ab08-4e5b-bf52-50be6c1ba3d2/a8-animal-groups-leopard.jpg"  // Replace with your image URL
            alt="Leopards in the Wild"
            style={{ width: '100%', borderRadius: '8px 8px 0 0' }}
          />
          <CardContent>
            <Typography variant="body1" color="text.secondary" paragraph>
              Exciting news! Our team has spotted a group of leopards in their natural habitat. Witnessing these majestic creatures in the wild is a testament to the success of conservation efforts.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Stay tuned for more updates as we continue to monitor and protect these beautiful animals.
            </Typography>
          </CardContent>
        </Container>

        {/* Right Layout */}
        <Container
  maxWidth="md"
  sx={{
    border: '4px solid #87ceeb', // Sky Blue
    borderRadius: '8px',
    marginRight: '16px', // Adjust as needed
    padding: 0, // Set padding to 0
    backgroundColor: 'white',
    height: '90%',
  }}
><br></br><br></br>
  <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
    Environmental Impact: Deforestation
  </Typography>
  <img
    src="https://static.dw.com/image/44079914_605.jpg"  // Replace with your image URL
    alt="Deforestation Impact"
    style={{ width: '100%', borderRadius: '8px 8px 0 0' }}
  />
  <CardContent>
    <Typography variant="body1" color="text.secondary" paragraph>
      Deforestation, driven by human activities, is a critical environmental issue. The relentless clearing of forests for agriculture, logging, and urbanization has severe consequences on our planet's health.
    </Typography>
    <Typography variant="body1" color="text.secondary" paragraph>
      It leads to loss of biodiversity, disrupts ecosystems, contributes to climate change, and threatens the livelihoods of indigenous communities. As stewards of the Earth, it is crucial to address and reverse the impact of deforestation through sustainable practices and conservation efforts.
    </Typography>
  </CardContent>
</Container>
      </Box>
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
