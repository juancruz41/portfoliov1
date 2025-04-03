import React from "react";
import { Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

// 📌 Íconos de tecnologías desde Devicon
const techIcons = {
  HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  AWS: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  Firebase: "https://cdn.simpleicons.org/firebase/FFCA28",
};

// 📌 Datos de habilidades organizados en categorías
const skillsData = [
  { title: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React"] },
  { title: "Backend", skills: ["Node", "Python", "Flask", "MySQL", "Firebase", "AWS"] },
  { title: "Languages", skills: ["JavaScript", "Python"] },
];

function Skills() {
  return (
    <Container sx={{ padding: "40px 0", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom sx={{ color: "primary.main" }}>
        Technical Skills
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {skillsData.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: "#1e1e1e", color: "text.primary", textAlign: "left", boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                  {category.title}
                </Typography>
                <List>
                  {category.skills.map((skill, idx) => (
                    <ListItem key={idx} sx={{ paddingLeft: 0 }}>
                      <ListItemIcon>
                        <img src={techIcons[skill]} alt={skill} width="24" height="24" />
                      </ListItemIcon>
                      <ListItemText primary={skill} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Skills;
