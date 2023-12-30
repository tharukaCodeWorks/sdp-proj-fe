import { FC } from "react";
import {
  Box,
  Paper,
} from "@mui/material";
import { SystemUserLayout } from "../../components/layouts/sys-user-layout/SystemUserLayout";
import { LineChart, PieChart } from "../../components/charts";
import BarChart from "../../components/charts/BarChart";
import TileCard from "../../components/charts/TileCard";

const drawerWidth = 240;

export const MainDashboardPage: FC = () => {
  return (
    <SystemUserLayout pageTitle="Dashboard">
      <Box sx={{ display: "flex", gap: "0.5rem", mb: 2 }}>
        <Box sx={{ flex: 1 }}>
          <TileCard
            title="Complaints Today - Wildlife Dept"
            noOfComplaints={15}
            bgColor="#FF4232"
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <TileCard
            title="Complaints Today - Forest Dept"
            noOfComplaints={20}
            bgColor="#464952"
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <TileCard
            title="Total no of Complaints Received - Wildlife Dept"
            noOfComplaints={158}
            bgColor="#32234C"
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <TileCard
            title="Total no of Complaints Received - Forest Dept"
            noOfComplaints={208}
            bgColor="#0090FF"
          />
        </Box>
      </Box>

      {/* Row 2 */}

      <Box sx={{ display: "flex", gap: "0.5rem", mb: 2 }}>
        <Box sx={{ flex: 1 }}>
          <TileCard
            title="Closed Complaints - Wildlife Dept"
            noOfComplaints={75}
            bgColor="#77CBC6"
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <TileCard
            title="Closed Complaints - Forest Dept"
            noOfComplaints={62}
            bgColor="#FEA000"
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <TileCard
            title="In-Progress Complaints - Wildlife Dept"
            noOfComplaints={32}
            bgColor="#19AC06"
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <TileCard
            title="In-Progress Complaints - Forest Dept"
            noOfComplaints={19}
            bgColor="#A54D98"
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          height: "350px",
          gap: "0.5rem",
          mb: 2,
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

      <Box
        sx={{
          display: "flex",
          height: "350px",
          gap: "0.5rem",
          mb: 2,
        }}
      >
        <Box sx={{ flex: 1, gap: "1rem" }}>
          <Paper elevation={3} sx={{ width: "100%", height: "100%" }}>
            <LineChart />
          </Paper>
        </Box>
      </Box>
    </SystemUserLayout>
  );
};
