import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TimelineSection from "./components/TimelineSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

// 🎨 Definiendo el tema oscuro con MUI
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000", // Fondo negro
      paper: "#121212",
    },
    text: {
      primary: "#C69749", // Texto dorado
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

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* Aplica fondo negro y resetea estilos */}
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
