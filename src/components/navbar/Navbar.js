import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  useMediaQuery,
  // Box,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
// import About from "./pages/About";
import logo from "../Image/Avocardio.png";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <AppBar position="static" sx={{ bgcolor: "#618161", flexGrow: 1 }}>
        <Toolbar sx={{ color: "brown", justifyContent: "space-between" }}>
          <Stack direction="row" spacing={2} alignItems="center">
            {isMobile ? (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            ) : null}
            <img
              src={logo}
              alt="logo"
              width="70"
              height="70"
              sx={{ display: { xs: "none", sm: "block" } }}
            />
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography variant="h6" sx={{ color: "white" }}>
                Avocardio
              </Typography>
            </Link>
          </Stack>
          {!isMobile && (
            <Button
              sx={{
                color: "white",
                // "&:hover": {
                //   color: "white",
                //   bgcolor: "green",
                // },
              }}
              component={Link}
              to="/about"
            >
              About Us
            </Button>
          )}
          {isMobile && (
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
              <List sx={{ width: 250 }} onClick={toggleDrawer}>
                <ListItem>
                  <ListItemText>
                    <Typography variant="h6" sx={{ color: "brown" }}>
                      Avocardio
                    </Typography>
                  </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/about">
                  <ListItemText>About Us</ListItemText>
                </ListItem>
              </List>
            </Drawer>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
