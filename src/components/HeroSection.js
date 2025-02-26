import React from "react";
import { Container, Typography, Button } from "@mui/material";

function HeroSection() {
  return (
    <Container sx={{ textAlign: "center", padding: "40px 0" }}>
      <Typography variant="h3" gutterBottom>
        Juan Cruz - Backend Developer
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Specializing in scalable backend systems with Node.js & Python.
      </Typography>
      <Button variant="contained" color="primary" sx={{ marginRight: 1 }}>
        Contact Me
      </Button>
      <Button variant="contained" color="secondary">
        View CV
      </Button>
    </Container>
  );
}

export default HeroSection;
