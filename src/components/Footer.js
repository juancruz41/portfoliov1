import React from "react";
import { Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Container sx={{ textAlign: "center", padding: "20px 0", marginTop: "20px", backgroundColor: "#f5f5f5" }}>
      <Typography variant="body1">Email: juancruz@example.com | Phone: +123 456 7890</Typography>
    </Container>
  );
}

export default Footer;
