import React, { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Typography, Container, Card, CardContent, Box, Button } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

// 🎨 Tema oscuro con MUI
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#000000", paper: "#121212" },
    text: { primary: "#C69749", secondary: "#B8860B" },
    primary: { main: "#C69749" },
    secondary: { main: "#B8860B" },
  },
  typography: { fontFamily: "Arial, sans-serif" },
});

// 📌 Íconos de tecnologías para Learning Path
const techIcons = {
  "2025": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "2024": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "2023": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "2022": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "2021": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "2020": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "2019": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
};

// 📌 Datos de Experience (de más reciente a más antiguo)
const experienceItems = [
  { year: "2024 - Present", description: "Teaching computer system repair and maintenance in Secondary Schools." },
  { year: "2021 - 2024", description: "GST3D: Development in e-commerce using HTML, CSS, JavaScript." },
  { year: "2020 - 2021", description: "ProyectoColor - ItProuser: Installation, repair, and maintenance of equipment." },
  { year: "2019 - 2020", description: "Freelance repair and maintenance of CPUs, laptops, monitors, printers." },
];

// 📌 Datos de Learning Path (de más reciente a más antiguo)
const learningPathItems = [
  { year: "2025", description: "Deepening Flutter & Firebase for mobile development." },
  { year: "2024", description: "Learning Django. Flutter & Firebase for Mobile Apps." },
  { year: "2023", description: "Node.js and Python basics." },
  { year: "2022", description: "React.js, AWS, Hostinger. Debugging scalable backend systems." },
  { year: "2021", description: "WooCommerce & Shopify, first knowledge of JavaScript." },
  { year: "2020", description: "First knowledge of SEO and SQL." },
  { year: "2019", description: "Technical School Graduation. HTML5, CSS, PHP, MySQL." },
];

// 📌 Timeline con MUI y tarjetas (`Card`)
const TimelineSection = ({ title, items, useIcons = false }) => {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? items : items.slice(0, 2);

  return (
    <Container sx={{ mt: 4, textAlign: "center", position: "relative" }}>
      <Typography variant="h4" sx={{ mb: 2, color: "primary.main" }}>
        {title}
      </Typography>

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          maxHeight: expanded ? "none" : "280px",
          transition: "max-height 0.3s ease",
        }}
      >
        <Timeline position="alternate">
          {visibleItems.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                {/* 🔹 Dots normales en Experience, íconos en Learning Path */}
                {useIcons ? (
                  <TimelineDot sx={{ bgcolor: "transparent" }}>
                    <img src={techIcons[item.year]} alt={item.year} width="30" height="30" />
                  </TimelineDot>
                ) : (
                  <TimelineDot sx={{ bgcolor: "primary.main" }} />
                )}
                {index !== items.length - 1 && <TimelineConnector sx={{ bgcolor: "primary.main" }} />}
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{ backgroundColor: "#1e1e1e", color: "text.primary", textAlign: "center", p: 2, boxShadow: 3 }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {item.year}
                    </Typography>
                    <Typography variant="body1">{item.description}</Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>

      {/* 🔹 Efecto de desenfoque (blur) */}
      {!expanded && (
        <Box
          sx={{
            position: "absolute",
            bottom: 40,
            left: 0,
            width: "100%",
            height: 100,
            background: "linear-gradient(to bottom, rgba(0,0,0,0) 10%, #000000 90%)",
          }}
        />
      )}

      {/* 🔹 Botón para expandir/cerrar */}
      <Button
        onClick={() => setExpanded(!expanded)}
        variant="contained"
        sx={{ mt: 2, backgroundColor: "primary.main", color: "#000", "&:hover": { backgroundColor: "secondary.main" } }}
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Container>
  );
};

// 📌 Componente principal
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <HeroSection />

      {/* Experience Timeline con Dots normales */}
      <TimelineSection title="Experience" items={experienceItems} />

      {/* Learning Path Timeline con íconos y orden corregido */}
      <TimelineSection title="My Learning Path" items={learningPathItems} useIcons={true} />

      <Skills />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
