import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";

interface TileCardProps {
  title: string;
  noOfComplaints: number;
  bgColor: string;
}

const TileCard: React.FC<TileCardProps> = ({
  title,
  noOfComplaints,
  bgColor,
}) => {
  //const [totalClaims, setTotalClaims] = useState<number | null>(null);

  //   useEffect(() => {
  //     // Replace the following with your actual API call or data fetching logic
  //     const fetchTotalClaims = async () => {
  //       try {
  //         // Assume getTotalClaimsToday is a function that fetches the total claims for today
  //         const totalClaimsToday = await getTotalClaimsToday();
  //         setTotalClaims(totalClaimsToday);
  //       } catch (error) {
  //         console.error('Error fetching total claims:', error);
  //       }
  //     };

  //     fetchTotalClaims();
  //   }, []);

  return (
    <Card sx={{ backgroundColor: bgColor }}>
      <CardContent>
        <Typography variant="subtitle1" component="div" sx={{ color: "#fff" }}>
          {title}
        </Typography>
        {noOfComplaints !== null ? (
          <Typography variant="body2" color="#fff">
            No of Claims: {noOfComplaints}
          </Typography>
        ) : (
          <CircularProgress />
        )}
      </CardContent>
    </Card>
  );
};

export default TileCard;
