import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

function Projects() {
const projectList = [
    { title: "E-commerce Backend", description: "Built with Node.js and MongoDB." },
    { title: "Chat Application", description: "Flask-based real-time chat with WebSockets." },
    { title: "Analytics Dashboard", description: "Tracking performance with React and PostgreSQL." },
];

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
