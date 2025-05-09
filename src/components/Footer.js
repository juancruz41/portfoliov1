import React from "react";
import { Container, Typography, useTheme, Box } from "@mui/material";

function Footer() {
  const theme = useTheme(); 

  return (
    <Container
      sx={{
        textAlign: "center",
        padding: "20px 0",
        marginTop: "20px",
        backgroundColor: theme.palette.background.default, 
        color: theme.palette.text.primary, 
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="body1" sx={{ marginBottom: "10px" }}>
        © 2025 Juan Cruz Gonzalez. All rights reserved.
      </Typography>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <a href="https://github.com/juancruz41" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            width="24"
            height="24"
          />
        </a>
        <a href="https://www.linkedin.com/in/juan-cruz-morales-gonzalez/" target="_blank" rel="noopener noreferrer">
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            width="24"
            height="24"
          />
        </a>
      </Box>
    </Container>
  );
}

export default Footer;

