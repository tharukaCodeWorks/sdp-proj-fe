import { FC, ReactNode } from "react";
import { TopNavigation } from "../../topnav/TopNavigation";
import { Footer } from "../../footer/Footer";
import Box from "@mui/material/Box";

export interface IPublicUserLayoutProps {
  children: ReactNode;
}

export const PublicUserLayout: FC<IPublicUserLayoutProps> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <TopNavigation />
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
