import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import logo from "../assets/images/favicon.png";

function Header() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1E1E1E", padding: "5px" }}>
      <Toolbar>
        <Box component="img" src={logo} alt="Logo" sx={{ height: 40, marginRight: 2 }} />
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#C69749" }}>
          Portfolio
        </Typography>

        {/* 📌 Botones con scroll */}
        {[
          { label: "Experience", id: "experience" },
          { label: "Education", id: "learning-path" }, // ← Cambiado para coincidir con la sección
          { label: "Skills", id: "skills" },
          { label: "Projects", id: "projects" },
          { label: "About Me", id: "about" },
          { label: "Contact", id: "contact" },
        ].map((item) => (
          <Button key={item.id} sx={{ color: "#C69749" }} onClick={() => handleScroll(item.id)}>
            {item.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
