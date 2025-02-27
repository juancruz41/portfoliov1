import React from "react";
import { ThemeProvider, createTheme, CssBaseline, Typography, Container, Card, CardContent, Box } from "@mui/material";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

// 🎨 Tema oscuro con MUI
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#121212",
    },
    text: {
      primary: "#C69749",
      secondary: "#B8860B",
    },
    primary: {
      main: "#C69749",
    },
    secondary: {
      main: "#B8860B",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

// 📌 Timeline con Scroll Horizontal
const TimelineSection = ({ title, items }) => (
  <Container sx={{ mt: 4, textAlign: "center" }}>
    <Typography variant="h4" sx={{ mb: 2 }}>
      {title}
    </Typography>

    {/* 📌 Scroll Horizontal */}
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        gap: 2, // Espacio entre tarjetas
        padding: 2,
        scrollbarWidth: "thin", // Personaliza el scrollbar en Firefox
        "&::-webkit-scrollbar": { height: 6 }, // Scrollbar en Chrome
        "&::-webkit-scrollbar-thumb": { background: "#C69749", borderRadius: 3 },
      }}
    >
      {items.map((item, index) => (
        <Card
          key={index}
          sx={{
            minWidth: 250, // 🔹 Define un ancho mínimo para las tarjetas
            height: 180, // 🔹 Asegura que todas las Cards sean iguales
            backgroundColor: "#1e1e1e",
            color: "#C69749",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            flexShrink: 0, // 🔹 Evita que las tarjetas se reduzcan en tamaño
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {item.year}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>{item.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  </Container>
);

// 📌 Componente principal con la Experiencia y el Learning Path
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <HeroSection />
      
      {/* Experience Timeline */}
      <TimelineSection
        title="Experience"
        items={[
          { year: "2019 - 2020", description: "Freelance repair and maintenance of CPUs, laptops, monitors, printers." },
          { year: "2020 - 2021", description: "ProyectoColor - ItProuser: Installation, repair, and maintenance of equipment." },
          { year: "2021 - 2024", description: "GST3D: Development in e-commerce using HTML, CSS, JavaScript." },
          { year: "2024 - Present", description: "Teaching computer system repair and maintenance in Secondary Schools." },
        ]}
      />

      {/* Learning Path Timeline */}
      <TimelineSection
        title="My Learning Path"
        items={[
          { year: "2019", description: "Technical School Graduation. HTML5, CSS, PHP, MySQL." },
          { year: "2020", description: "First knowledge of SEO and SQL." },
          { year: "2021", description: "WooCommerce & Shopify, first knowledge of JavaScript." },
          { year: "2022", description: "React.js, AWS, Hostinger. Debugging scalable backend systems." },
          { year: "2023", description: "Node.js and Python basics." },
          { year: "2024", description: "Learning Django. Flutter & Firebase for Mobile Apps." },
          { year: "2025", description: "Deepening Flutter & Firebase for mobile development." },
        ]}
      />

      <Skills />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

