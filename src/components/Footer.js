import React from "react";
import { Container, Typography, useTheme } from "@mui/material";

function Footer() {
  const theme = useTheme(); // Accede al tema actual

  return (
    <Container
      sx={{
        textAlign: "center",
        padding: "20px 0",
        marginTop: "20px",
        backgroundColor: theme.palette.background.default, // Usa el color de fondo del tema
        color: theme.palette.text.primary, // Usa el color del texto del tema
      }}
    >
      <Typography variant="body1">
        Email: juancruz@example.com | Phone: +123 456 7890
      </Typography>
    </Container>
  );
}

export default Footer;
