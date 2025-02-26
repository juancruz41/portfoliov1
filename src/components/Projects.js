import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const projectList = [
  { title: "E-commerce Backend System", description: "Scalable backend using Node.js & MongoDB. REST APIs & authentication." },
  { title: "Chat Application", description: "Real-time chat with WebSockets using Python & Flask. Deployed on AWS." },
  { title: "Analytics Dashboard", description: "Dashboard with React, Node.js & PostgreSQL to track metrics." },
];

function Projects() {
  return (
    <Container sx={{ padding: "20px 0" }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projectList.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography>{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;

