import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TimelineSection from "./components/TimelineSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <TimelineSection
        title="Experience"
        items={[
          { year: "2019 - 2020", description: "Freelance repair and maintenance." },
          { year: "2021 - 2024", description: "Backend development at GST3D." },
        ]}
      />
      <TimelineSection
        title="Learning Path"
        items={[
          { year: "2019", description: "Technical School Graduation." },
          { year: "2024", description: "Django and Flutter." },
        ]}
      />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
