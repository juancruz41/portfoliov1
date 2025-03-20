import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import TimelineSection from "./components/TimeLineSection";

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

const techIcons = {
  "2025": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "2024": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "2023": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "2022": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "2021": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "2020": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "2019": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
};

const experienceItems = [
  { year: "2024 - Present", description: "Technical High School: Teaching computer system repair and maintenance in Secondary Schools." },
  { year: "2021 - 2024", description: "GST3D: Development in e-commerce using HTML, CSS, JavaScript. Management and customization of existing ecommerce in Woocommerce and Shopify" },
  { year: "2020 - 2021", description: "ProyectoColor - ItProuser: Installation, repair, and maintenance of equipment. Data entry, backups and updates" },
  { year: "2019 - 2020", description: "Freelance: Repair and maintenance of CPUs, laptops, monitors, printers." },
];

const learningPathItems = [
  { year: "2025", description: "Deepening Flutter & Firebase for mobile development." },
  { year: "2024", description: "Learning Django. Flutter & Firebase for Mobile Apps." },
  { year: "2023", description: "Node.js and Python basics." },
  { year: "2022", description: "React.js, AWS, Hostinger. Debugging scalable backend systems." },
  { year: "2021", description: "WooCommerce & Shopify, first knowledge of JavaScript." },
  { year: "2020", description: "First knowledge of SEO and SQL." },
  { year: "2019", description: "Technical School Graduation. HTML5, CSS, PHP, MySQL." },
];

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <HeroSection />

      {/* Timeline Sections */}
      <TimelineSection title="Experience" items={experienceItems} />
      <TimelineSection title="My Learning Path" items={learningPathItems} useIcons={true} techIcons={techIcons} />

      <Skills />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
