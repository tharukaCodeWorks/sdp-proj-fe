import React, { FC } from "react";
import { Box } from "@mui/material";
import { PieChart } from "../../components/charts";
import { SystemUserLayout } from "../../components/layouts/sys-user-layout/SystemUserLayout";
import BarChart from "../../components/charts/BarChart";
import TileCard from "../../components/charts/TileCard";
import { Paper } from "@mui/material";

// const drawerWidth = 240;

export const MainDashboardPage: FC = () => {
  return (
    <SystemUserLayout>
      <Box sx={{ display: "flex", gap: "1rem", mb: 2 }}>
        <Box sx={{ flex: 1 }}>
          <TileCard title="Total No of Complaints Today" noOfComplaints={15} />
        </Box>

        <Box sx={{ flex: 1 }}>
          <TileCard title="Total No of Complaints Today" noOfComplaints={15} />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          height: "300px",
          gap: "1rem",
        }}
      >
        <Box sx={{ flex: 1, gap: "1rem" }}>
          <Paper elevation={3} sx={{ width: "100%", height: "100%" }}>
            <PieChart />
          </Paper>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Paper elevation={3} sx={{ width: "100%", height: "100%" }}>
            <BarChart />
          </Paper>
        </Box>
      </Box>
    </SystemUserLayout>
  );
};
