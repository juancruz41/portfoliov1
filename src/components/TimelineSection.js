import React, { useState } from "react";
import { Container, Typography, Box, Card, CardContent, Button } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { motion } from "framer-motion";

const TimelineSection = ({ title, items, useIcons = false, techIcons = {} }) => {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? items : items.slice(0, 2);

  return (
    <Container sx={{ mt: 4, textAlign: "center", position: "relative" }}>
      <Typography variant="h4" sx={{ mb: 2, color: "primary.main" }}>
        {title}
      </Typography>

      <Box sx={{ position: "relative", overflow: "hidden", maxHeight: expanded ? "none" : "280px", transition: "max-height 0.3s ease" }}>
        <Timeline position="alternate">
          {visibleItems.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                {useIcons ? (
                  <TimelineDot sx={{ bgcolor: "transparent" }}>
                    <img src={techIcons[item.year]} alt={item.year} width="30" height="30" />
                  </TimelineDot>
                ) : (
                  <TimelineDot sx={{ bgcolor: "primary.main" }} />
                )}
                {index !== items.length - 1 && <TimelineConnector sx={{ bgcolor: "primary.main" }} />}
              </TimelineSeparator>

              <TimelineContent>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card sx={{ backgroundColor: "#1e1e1e", color: "text.primary", textAlign: "center", p: 2, boxShadow: "0px 4px 10px rgba(58, 58, 58, 0.8)" }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {item.year}
                      </Typography>
                      <Typography variant="body1">{item.description}</Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>

      {!expanded && (
        <Box
          sx={{
            position: "absolute",
            bottom: 40,
            left: 0,
            width: "100%",
            height: 100,
            background: "linear-gradient(to bottom, rgba(0,0,0,0) 10%, #000000 90%)",
          }}
        />
      )}

      <Button
        onClick={() => setExpanded(!expanded)}
        variant="contained"
        sx={{ mt: 2, backgroundColor: "primary.main", color: "#000", "&:hover": { backgroundColor: "secondary.main" } }}
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Container>
  );
};

export default TimelineSection;
