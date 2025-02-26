import React from "react";
import { Container, Typography } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";

function TimelineSection({ title, items }) {
return (
    <Container sx={{ padding: "20px 0" }}>
    <Typography variant="h4" gutterBottom>
        {title}
    </Typography>
    <Timeline>
        {items.map((item, index) => (
        <TimelineItem key={index}>
            <TimelineSeparator>
            <TimelineDot color="primary" />
            {index < items.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
            <Typography variant="h6">{item.year}</Typography>
            <Typography>{item.description}</Typography>
            </TimelineContent>
        </TimelineItem>
        ))}
    </Timeline>
    </Container>
);
}

export default TimelineSection;
