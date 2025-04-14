import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Tooltip,
} from "@mui/material";

// Iconos de tecnologías
const techIcons = {
  Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Firebase: "https://cdn.simpleicons.org/firebase/FFCA28",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  WebSocket: "https://upload.wikimedia.org/wikipedia/commons/1/1b/WebSocket-logo.svg", // No oficial
};

const projectList = [
  {
    title: "E-commerce Backend System",
    description: "A scalable backend platform with RESTful APIs, user authentication, and database management.",
    github: "https://github.com/juancruz41",
    demo: "https://github.com/juancruz41",
    techs: ["Node", "MySQL"],
  },
  {
    title: "Chat Application",
    description: "Real-time messaging web app with persistent connections and smooth UX.\n\n",
    github: "https://github.com/juancruz41",
    demo: "https://github.com/juancruz41",
    techs: ["Python", "Flask"],
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive dashboard to visualize and track user metrics and activity in real time.\n\n",
    github: "https://github.com/juancruz41",
    demo: "https://jcstats.netlify.app",
    techs: ["React", "Node", "Firebase"],
  },
];

function Projects() {
  return (
    <Container id="projects" sx={{ padding: "40px 0", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom sx={{ color: "primary.main" }}>
        Projects
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projectList.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: "#1e1e1e",
                color: "text.primary",
                textAlign: "center",
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                  {project.title}
                </Typography>
                <Typography sx={{ marginBottom: 2, whiteSpace: 'pre-line' }}>
                  {project.description}
                </Typography>
                <Box
                  display="flex"
                  justifyContent="center"
                  gap={1}
                  flexWrap="wrap"
                  sx={{ marginBottom: 2 }}
                >
                  {project.techs.map((tech, idx) => (
                    <Tooltip title={tech} key={idx}>
                      <img src={techIcons[tech]} alt={tech} width="28" height="28" />
                    </Tooltip>
                  ))}
                </Box>
                <Box display="flex" justifyContent="center" gap={2}>
                  <Button
                    variant="outlined"
                    color="inherit"
                    href={project.github}
                    target="_blank"
                    startIcon={
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        alt="GitHub"
                        width="20"
                        height="20"
                      />
                    }
                  >
                    GitHub
                  </Button>
                  <Button variant="contained" color="primary" href={project.demo} target="_blank">
                    Live Demo
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;

