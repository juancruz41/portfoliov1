import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/favicon.png";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const menuItems = [
    { label: "Experience", id: "experience" },
    { label: "Education", id: "learning-path" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "About Me", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false); // Cerrar el menú en móvil después de hacer clic
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1E1E1E", padding: "5px" }}>
      <Toolbar>
        {/* 📌 Logo */}
        <Box component="img" src={logo} alt="Logo" sx={{ height: 40, marginRight: 2 }} />
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#C69749" }}>Juan Cruz Gonzalez</Typography>

        {/* 📌 Menú para escritorio */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {menuItems.map((item) => (
            <Button key={item.id} sx={{ color: "#C69749" }} onClick={() => handleScroll(item.id)}>
              {item.label}
            </Button>
          ))}
        </Box>

        {/* 📌 Menú para móviles */}
        <IconButton
          color="inherit"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* 📌 Drawer para móvil */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250, backgroundColor: "#1E1E1E", height: "100%" }}>
          {menuItems.map((item) => (
            <ListItem button key={item.id} onClick={() => handleScroll(item.id)}>
              <ListItemText primary={item.label} sx={{ color: "#C69749", textAlign: "center" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Header;
