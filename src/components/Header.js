import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../assets/images/favicon.png";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const menuItems = [
    { label: "About Me", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Education", id: "learning-path" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
  ];

  const handleMenuClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false); 
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#1E1E1E", padding: "5px" }}>
        <Toolbar>
            <Box component="img" src={logo} alt="Logo" sx={{ height: 40, marginRight: 2 }} />
            <Typography
              component="a"
              href="https://www.linkedin.com/in/juan-cruz-morales-gonzalez/"
              target="_blank"
              rel="noopener noreferrer"
              variant="h6"
              sx={{
                flexGrow: 1,
                color: "#C69749",
                textDecoration: "none", 
              "&:hover": {
                textDecoration: "none",
              },
              }}
            >
              Juan Cruz Gonzalez
            </Typography>

          {/* RRSS escritorio */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            
            {menuItems.map((item) => (
              <Button
                key={item.id}
                sx={{ color: "#C69749" }}
                onClick={() => handleMenuClick(item.id)}
              >
                {item.label}
              </Button>
            
            ))}
            <IconButton
              color="inherit"
              component="a"
              href="https://github.com/juancruz41"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#C69749", mr: 1 }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              color="inherit"
              component="a"
              href="https://www.linkedin.com/in/juan-cruz-morales-gonzalez/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#C69749", mr: 1 }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>


          {/*Menú móvil */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        {/*Drawer móvil */}
        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
          <List sx={{ width: 250, backgroundColor: "#1E1E1E", height: "100%" }}>
            {menuItems.map((item) => (
              <ListItem button key={item.id} onClick={() => handleMenuClick(item.id)}>
                <ListItemText
                  primary={item.label}
                  sx={{ color: "#C69749", textAlign: "center" }}
                />
              </ListItem>
            ))}

            {/*íconos en mobile */}
            <ListItem
              button
              component="a"
              href="https://github.com/juancruz41"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ justifyContent: "center" }}
            >
              <ListItemIcon sx={{ justifyContent: "center", color: "#C69749" }}>
                <GitHubIcon />
              </ListItemIcon>
            </ListItem>
                        <ListItem
              button
              component="a"
              href="https://www.linkedin.com/in/juan-cruz-morales-gonzalez/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ justifyContent: "center" }}
            >
              <ListItemIcon sx={{ justifyContent: "center", color: "#C69749" }}>
                <LinkedInIcon />
              </ListItemIcon>
            </ListItem>
            
          </List>
        </Drawer>
      </AppBar>
    </>
  );
}

export default Header;
