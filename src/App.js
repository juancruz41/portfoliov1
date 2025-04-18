import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import ParticlesBackground from "./components/ParticlesBackground";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import TimelineSection from "./components/TimelineSection";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "transparent", paper: "#121212" },
    text: { primary: "#C69749", secondary: "#B8860B" },
    primary: { main: "#C69749" },
    secondary: { main: "#B8860B" },
  },
  typography: { fontFamily: "Arial, sans-serif" },
});

const techIcons = {
  "2024 - Today": "https://www.svgrepo.com/show/493523/teacher-male.svg",
  "2021 - 2024": "https://www.svgrepo.com/show/202973/coding-html.svg",
  "2020 - 2021": "https://www.svgrepo.com/show/184718/networking-server.svg",
  "2019 - 2020": "https://www.svgrepo.com/show/373370/tools.svg",
  "2025": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  "2024": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "2023": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "2022": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "2021": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "2020": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "2019": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
};

const experienceItems = [
  { year: "2024 - Today", description: "Technical High School Teacher: \n\n  Teaching computer systems installation, repair, and maintenance at secondary level." },
  { year: "2021 - 2024", description: " Junior Web Developer – GST3D: \n\n  Developed and maintained the main e-commerce platform using HTML5, CSS, and JavaScript. Managed and customized existing WooCommerce and Shopify stores to enhance functionality and user experience." },
  { year: "2020 - 2021", description: " Technical Support – ProyectoColor / ItProuser S.A.: \n\n  Performed hardware maintenance and network support. Managed data entry tasks, regular backups, and system updates." },
  { year: "2019 - 2020", description: "Freelance IT Technician: \n\n  Provided repair and maintenance services for desktops, laptops, monitors, and printers." },
];

const learningPathItems = [
  { year: "2025", description: "Advanced study of Flutter & Firebase to better understand mobile API integration. Deepening backend practices and deployment strategies (CI/CD, containers, cloud)." },
  { year: "2024", description: "Began learning Django (Python) for full-stack web development. Built first mobile projects using Flutter & Firebase." },
  { year: "2023", description: "Gained strong foundations in Node.js and Python for backend development. Explored scalable architecture and backend best practices. Explored scalable architecture and backend best practices." },
  { year: "2022", description: "Practiced with React.js and explored cloud hosting services like AWS and Hostinger. Debugging and performance tuning in backend systems." },
  { year: "2021", description: "Hands-on experience with WooCommerce and Shopify. First steps with JavaScript for frontend and business logic." },
  { year: "2020", description: "Basic knowledge of SEO and SQL. Web maintenance and simple database tasks." },
  { year: "2019", description: "Graduated from technical high school. Learned HTML5, CSS, PHP, and MySQL fundamentals." },
];

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ParticlesBackground /> 
      <Header />
      <HeroSection />
      <TimelineSection title="Experience" items={experienceItems} useIcons={true} techIcons={techIcons} />
      <TimelineSection title="My Learning Path" items={learningPathItems} useIcons={true} techIcons={techIcons} />
      <Skills />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;