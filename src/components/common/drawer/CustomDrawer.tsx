import {
  CircularProgress,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC, ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";

export interface ICustomDrawerProps {
  children: ReactNode;
  drawerOpen: boolean;
  onClose(): void;
  title: string;
  loading?: boolean;
}

export const CustomDrawer: FC<ICustomDrawerProps> = ({
  children,
  drawerOpen,
  onClose,
  title,
  loading,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Drawer
      anchor={isMobile ? "bottom" : "right"}
      open={drawerOpen}
      onClose={onClose}
      sx={{ zIndex: 1300 }}
    >
      {loading && (
        <div
          style={{
            position: "absolute",
            background: "#ffffff",
            width: "100%",
            height: "100%",
            zIndex: 99,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: 0.8,
          }}
        >
          <CircularProgress />
        </div>
      )}

      <div
        style={{
          width: isMobile ? "auto" : 400,
          height: isMobile ? "80vh" : "auto",
          padding: 16,
        }}
      >
        {isMobile ? (
          // Mobile: Touch handler (swipe down handler)
          <div style={{ width: "100%", textAlign: "center", marginBottom: 10 }}>
            <div
              style={{
                width: 40,
                height: 6,
                backgroundColor: "#ccc",
                borderRadius: 3,
                display: "inline-block",
              }}
            />
          </div>
        ) : (
          // Desktop: Close button
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
        )}
        <Typography variant="h6" fontWeight={"bold"}>
          {title}
        </Typography>
        {children}
      </div>
    </Drawer>
  );
};
