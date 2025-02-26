import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";

function TimelineSection({ title, items }) {
  return (
    <Container sx={{ padding: "20px 0" }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        {title}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", overflowX: "auto", paddingBottom: 2 }}>
        <Timeline sx={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%" }}>
          {items.map((item, index) => (
            <TimelineItem
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: 150,  // Ancho mínimo para evitar que los puntos se junten
                position: "relative",
              }}
            >
              <TimelineSeparator sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <TimelineDot color="primary" />
                {index < items.length - 1 && (
                  <TimelineConnector sx={{ width: "100px", height: "4px", backgroundColor: "gray" }} />
                )}
              </TimelineSeparator>
              <TimelineContent sx={{ textAlign: "center", marginTop: "10px" }}>
                <Typography variant="h6">{item.year}</Typography>
                <Typography>{item.description}</Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Container>
  );
}

export default TimelineSection;
