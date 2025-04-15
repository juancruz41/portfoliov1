import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Collapse,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { motion } from "framer-motion";

const TimelineSection = ({ title, items, useIcons = false, techIcons = {} }) => {
  const [expandedCards, setExpandedCards] = useState({});
  const [showAll, setShowAll] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleCard = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const visibleItems = showAll ? items : items.slice(0, 2);

  return (
    <Container id="experience" sx={{ mt: 4, textAlign: "center", position: "relative" }}>
      <Typography variant="h4" sx={{ mb: 2, color: "primary.main" }}>
        {title}
      </Typography>

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
              {index !== visibleItems.length - 1 && (
                <TimelineConnector sx={{ bgcolor: "primary.main" }} />
              )}
            </TimelineSeparator>

            <TimelineContent sx={{ px: { xs: 0, sm: 2 } }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    backgroundColor: "#1e1e1e",
                    color: "text.primary",
                    textAlign: "center",
                    p: 2,
                    boxShadow: "0px 4px 10px #1e1e1e",
                    width: { xs: "100%", sm: "80%" },
                    maxWidth: { sm: "800px" },
                    mx: { xs: 0, sm: "auto" },
                    cursor: isMobile ? "pointer" : "default",
                  }}
                  onClick={() => isMobile && toggleCard(index)}
                >
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {item.year}
                    </Typography>
                    {isMobile ? (
                      <Collapse in={expandedCards[index]}>
                        <Typography variant="body1" sx={{ mt: 1 }}>
                          {item.description.split("\n").map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </Typography>
                      </Collapse>
                    ) : (
                      <Typography variant="body1" sx={{ mt: 1 }}>
                        {item.description.split("\n").map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      {items.length > 2 && (
        <Button
          variant="outlined"
          onClick={() => setShowAll(!showAll)}
          sx={{ mt: 2, color: "primary.main", borderColor: "primary.main" }}
        >
          {showAll ? "Show Less" : "Show More"}
        </Button>
      )}
    </Container>
  );
};

export default TimelineSection;
