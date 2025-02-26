import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import logo from "../assets/images/favicon.png"; // 📌 Importa tu logo

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1E1E1E", padding: "5px" }}>
      <Toolbar>
        {/* 📌 Logo */}
        <Box component="img" src={logo} alt="Logo" sx={{ height: 40, marginRight: 2 }} />

        {/* 📌 Título */}
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#C69749" }}>
          Juan Cruz - Backend Developer
        </Typography>

        {/* 📌 Menú */}
        {["Experience", "Education", "Skills", "Projects", "About Me", "Contact"].map((item) => (
          <Button key={item} sx={{ color: "#C69749" }}>
            {item}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
