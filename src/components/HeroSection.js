import React, { useState } from "react";
import { Container, Typography, Button, Modal, Box, TextField } from "@mui/material";
import { useForm, ValidationError } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";

function HeroSection() {
  const [open, setOpen] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [state, handleSubmit] = useForm("xanqgrya"); // Reemplaza con tu Formspree ID

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onCaptchaChange = (value) => setCaptchaValue(value);

  return (
    <Container id="about" sx={{ textAlign: "center", padding: "40px 0" }}>
      <Typography variant="h5" gutterBottom>
        Backend Developer
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Specializing in robust and scalable backend systems with Node.js & Python.
      </Typography>
      <Typography variant="h5" gutterBottom>
        About Me
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Hey! I’m a backend developer passionate about building fast and scalable server-side applications. 
        I enjoy working with cloud services and databases to create reliable and efficient solutions. 
        Whether it’s solving complex problems or collaborating with a team, I take pride in building technology that simply works.
      </Typography>

      <Button variant="contained" color="primary" onClick={handleOpen} sx={{ marginRight: 1 }}>
        Contact Me
      </Button>

      <Button variant="contained" color="secondary" component="a" href="/cv_juancruz.pdf" target="_blank" rel="noopener noreferrer">
        View CV
      </Button>

      {/* FORMULARIO DE CONTACTO */}
      <Modal open={open} onClose={handleClose} aria-labelledby="contact-form">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "#1e1e1e",
            color: "#C69749",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Contact Me
          </Typography>

          {state.succeeded ? (
            <Typography color="success.main">Thank you! I'll be in touch soon.</Typography>
          ) : (
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                required
                margin="normal"
                InputLabelProps={{ style: { color: "#C69749" } }}
                sx={{ input: { color: "#C69749" } }}
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                required
                margin="normal"
                InputLabelProps={{ style: { color: "#C69749" } }}
                sx={{ input: { color: "#C69749" } }}
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <ReCAPTCHA sitekey="6LfYqhgrAAAAAHFKw9QYonVKt7-xXHf2yG4EEBi8" onChange={onCaptchaChange} />

              <Button type="submit" variant="contained" color="primary" disabled={state.submitting || !captchaValue} fullWidth sx={{ marginTop: 2 }}>
                Submit
              </Button>
            </form>
          )}
        </Box>
      </Modal>
    </Container>
  );
}

export default HeroSection;
