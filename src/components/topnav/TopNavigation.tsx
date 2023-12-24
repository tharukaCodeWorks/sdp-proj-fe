import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { logout } from "../../redux/slice/AuthSlice";
import MenuIcon from "@mui/icons-material/Menu";

export const TopNavigation: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { token } = useAppSelector((state) => state.auth);

  const handleSignIn = () => {
    navigate("/auth/login");
  };

  const handleSignUp = () => {
    navigate("/auth/signup");
  };

  const navigateHome = () => {
    navigate("/"); // Navigates to the home page
  };

  const navigateToNewComplaint = () => {
    navigate("/app/new-complaint"); // Adjust the route as needed
  };

  const navigateToMyComplaints = () => {
    navigate("/app/my-complaints"); // Adjust the route as needed
  };

  const handleSignOut = () => {
    dispatch(logout());
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {token && (
          <>
            <ListItem button onClick={navigateToNewComplaint}>
              <ListItemText primary="New Complaint" />
            </ListItem>
            <ListItem button onClick={navigateToMyComplaints}>
              <ListItemText primary="My Complaints" />
            </ListItem>
          </>
        )}
        {token ? (
          <ListItem button onClick={handleSignOut}>
            <ListItemText primary="Sign Out" />
          </ListItem>
        ) : (
          <>
            <ListItem button onClick={handleSignIn}>
              <ListItemText primary="Sign In" />
            </ListItem>
            <ListItem button onClick={handleSignUp}>
              <ListItemText primary="Sign Up" />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={navigateHome}
          >
            FAD Management {/* Shortened app name */}
          </Typography>
          {token && (
            <>
              <Button
                color="inherit"
                onClick={navigateToNewComplaint}
                sx={{ ml: 4, display: { xs: "none", sm: "block" } }}
              >
                New Complaint
              </Button>
              <Button
                color="inherit"
                onClick={navigateToMyComplaints}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                My Complaints
              </Button>
            </>
          )}
          <Box sx={{ flexGrow: 1 }} /> {/* Spacer */}
          {token ? (
            <Button
              color="inherit"
              onClick={handleSignOut}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Sign Out
            </Button>
          ) : (
            <>
              <Button
                color="inherit"
                onClick={handleSignIn}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Sign In
              </Button>
              <Button
                color="inherit"
                onClick={handleSignUp}
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
