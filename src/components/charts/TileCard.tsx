import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";

interface TileCardProps {
  title: string;
  noOfComplaints: number;
}

const TileCard: React.FC<TileCardProps> = ({ title, noOfComplaints }) => {
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
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        {noOfComplaints !== null ? (
          <Typography variant="body2" color="textSecondary">
            Total Claims Today: {noOfComplaints}
          </Typography>
        ) : (
          <CircularProgress />
        )}
      </CardContent>
    </Card>
  );
};

export default TileCard;
