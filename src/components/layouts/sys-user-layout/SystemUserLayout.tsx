import React, { FC, ReactNode, useState } from "react";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { useAppDispatch } from "../../../hooks/reduxHooks";
import { logout } from "../../../redux/slice/AuthSlice";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export interface ISystemUserLayoutProps {
  children: ReactNode;
  pageTitle: string;
  rightActionButtonText?: string;
  onClickRightAction?(): void;
}

export const SystemUserLayout: FC<ISystemUserLayoutProps> = ({
  children,
  pageTitle,
  rightActionButtonText,
  onClickRightAction,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOnClickLogout = () => {
    dispatch(logout());
    handleMenuClose();
  };

  const handleOnClickMenuItemClick = (path: string) => {
    navigate(path);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ marginRight: theme.spacing(2) }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id="primary-search-account-menu"
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleOnClickLogout}>Logout</MenuItem>
      </Menu>

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {/* Add additional items here */}
            <ListItem button onClick={() => handleOnClickMenuItemClick("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem
              button
              onClick={() => handleOnClickMenuItemClick("/app/workspace")}
            >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Workspace" />
            </ListItem>
            <ListItem
              button
              onClick={() => handleOnClickMenuItemClick("/app/manage-users")}
            >
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Users" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Toolbar />
        <Box sx={{ p: 3 }}>
          <Box sx={{display: "flex", justifyContent: "space-between"}}>
            <Typography variant="h5">{pageTitle}</Typography>

            {onClickRightAction && (
              <Button variant="contained" onClick={onClickRightAction}>
                {rightActionButtonText}
              </Button>
            )}
          </Box>
          {children}
        </Box>
      </Box>
    </Box>
  );
};
