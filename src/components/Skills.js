import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

function Skills() {
return (
    <Container sx={{ padding: "20px 0" }}>
    <Typography variant="h4" gutterBottom>
        Technical Skills
    </Typography>
    <Grid container spacing={2}>
        {["HTML5, CSS3, JavaScript, React.js", "Node.js, Python, Flask, SQL, AWS", "JavaScript, Python"].map((skill, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
            <CardContent>
                <Typography variant="body1">{skill}</Typography>
            </CardContent>
            </Card>
        </Grid>
        ))}
    </Grid>
    </Container>
);
}

export default Skills;
