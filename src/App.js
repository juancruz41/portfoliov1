import React from "react";
import { ThemeProvider, createTheme, CssBaseline, Typography, Container, Paper } from "@mui/material";
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

// 📌 Componente para la línea de tiempo con orden descendente
const TimelineSection = ({ title, items }) => {
  return (
    <Container sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {title}
      </Typography>

      <Timeline position="alternate">
        {items.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index !== items.length - 1 && <TimelineConnector sx={{ backgroundColor: "#C69749" }} />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} sx={{ padding: 2, backgroundColor: "#1e1e1e", color: "#C69749" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.year}
                </Typography>
                <Typography variant="body1">{item.description}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
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

      {/* Experience Timeline - Ahora en orden descendente (de lo más reciente a lo más antiguo) */}
      <TimelineSection
        title="Experience"
        items={[
          { year: "2024 - Present", description: "Teaching computer system repair and maintenance in Secondary Schools." },
          { year: "2021 - 2024", description: "GST3D: Development in e-commerce using HTML, CSS, JavaScript." },
          { year: "2020 - 2021", description: "ProyectoColor - ItProuser: Installation, repair, and maintenance of equipment." },
          { year: "2019 - 2020", description: "Freelance repair and maintenance of CPUs, laptops, monitors, printers." },
        ]}
      />

      {/* Learning Path Timeline */}
      <TimelineSection
        title="My Learning Path"
        items={[
          { year: "2025", description: "Deepening Flutter & Firebase for mobile development." },
          { year: "2024", description: "Learning Django. Flutter & Firebase for Mobile Apps." },
          { year: "2023", description: "Node.js and Python basics." },
          { year: "2022", description: "React.js, AWS, Hostinger. Debugging scalable backend systems." },
          { year: "2021", description: "WooCommerce & Shopify, first knowledge of JavaScript." },
          { year: "2020", description: "First knowledge of SEO and SQL." },
          { year: "2019", description: "Technical School Graduation. HTML5, CSS, PHP, MySQL." },
        ]}
      />

      <Skills />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
