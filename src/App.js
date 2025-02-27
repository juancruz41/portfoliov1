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

// 📌 Componente de la Timeline HORIZONTAL
const TimelineSection = ({ title, items }) => (
  <Container sx={{ mt: 4, textAlign: "center" }}>
    <Typography variant="h4" sx={{ mb: 2 }}>
      {title}
    </Typography>

    {title === "Experience" && (
      <>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          From high school... In technology.
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          2+ years of experience in backend development, working with technologies such as Node.js, Python, and AWS to build and maintain robust server-side systems.
        </Typography>
      </>
    )}

    {/* 📌 Contenedor de la línea de tiempo con scroll horizontal */}
    <Box
      sx={{
        display: "flex",
        overflowX: "auto", // Habilita scroll horizontal si los elementos no caben
        gap: 3,
        paddingBottom: 2,
        "&::-webkit-scrollbar": { height: 8 }, // Estiliza el scrollbar
        "&::-webkit-scrollbar-thumb": { background: "#C69749", borderRadius: 4 },
      }}
    >
      {items.map((item, index) => (
        <Card
          key={index}
          sx={{
            minWidth: 250, // Asegura que las tarjetas sean suficientemente anchas
            flexShrink: 0, // Evita que se achiquen
            backgroundColor: "#1e1e1e",
            color: "#C69749",
          }}
        >
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {item.year}
            </Typography>
            <Typography variant="body1">{item.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  </Container>
);

// 📌 Componente principal
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <HeroSection />
      <TimelineSection
        title="Experience"
        items={[
          { year: "2019 - 2020", description: "Freelance repair and maintenance of computers and printers." },
          { year: "2021 - 2024", description: "Backend Developer at GST3D, working with Node.js, AWS & SQL." },
        ]}
      />
      <TimelineSection
        title="Learning Path"
        items={[
          { year: "2019", description: "Graduated from Technical School, learning HTML, CSS & PHP." },
          { year: "2023", description: "Learned Node.js & Python for backend development." },
          { year: "2024", description: "Started with Django & Flutter for new projects." },
        ]}
      />
      <Skills />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
