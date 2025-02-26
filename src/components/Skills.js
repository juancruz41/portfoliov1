import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const skillsData = [
  { title: "Frontend", skills: "HTML5, CSS3, JavaScript, React.js" },
  { title: "Backend", skills: "Node.js, Python, Flask, SQL, AWS" },
  { title: "Languages", skills: "JavaScript, Python" },
];

function Skills() {
  return (
    <Container sx={{ padding: "20px 0" }}>
      <Typography variant="h4" gutterBottom>
        Technical Skills
      </Typography>
      <Grid container spacing={2}>
        {skillsData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography>{item.skills}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Skills;
