import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  useMediaQuery,
  useTheme,
  Collapse,
  Box,
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
  const [showAll, setShowAll] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCardClick = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const visibleItems = showAll ? items : items.slice(0, 2);

const renderMobileVersion = () => (
  <Timeline
    position="right"
    sx={{
      pl: 0,
      [`& .MuiTimelineItem-root`]: {
        flexDirection: "row",
      },
    }}
  >
    {visibleItems.map((item, index) => (
      <TimelineItem
        key={index}
        sx={{
          "&::before": { display: "none" },
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {/* Dots & connectors on the left */}
        <TimelineSeparator sx={{ minInlineSize: "auto", mr: 1 }}>
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

        {/* Cards centered */}
        <TimelineContent sx={{ pl: 0, width: "100%" }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Card
              onClick={() => handleCardClick(index)}
              sx={{
                backgroundColor: "#1e1e1e",
                color: "text.primary",
                boxShadow: "0px 4px 10px #1e1e1e",
                cursor: "pointer",
                textAlign: "center",
                width: "90%",
              }}
            >
              <CardContent>
                <Typography variant="h6">{item.year}</Typography>
                <Collapse in={expandedIndex === index} timeout="auto" unmountOnExit>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {item.description.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </Typography>
                </Collapse>
              </CardContent>
            </Card>
          </Box>
        </TimelineContent>
      </TimelineItem>
    ))}
  </Timeline>
);


  const renderDesktopVersion = () => (
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
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {item.year}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {item.description.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );

  return (
    <Container id="experience" sx={{ mt: 4, textAlign: "center", position: "relative" }}>
      <Typography variant="h4" sx={{ mb: 2, color: "primary.main" }}>
        {title}
      </Typography>

      {isMobile ? renderMobileVersion() : renderDesktopVersion()}

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
