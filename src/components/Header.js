import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

function Header() {
return (
    <AppBar position="static">
    <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Juan Cruz - Backend Developer
        </Typography>
        <Button color="inherit">Experience</Button>
        <Button color="inherit">Education</Button>
        <Button color="inherit">Skills</Button>
        <Button color="inherit">Projects</Button>
        <Button color="inherit">About Me</Button>
        <Button color="inherit">Contact</Button>
    </Toolbar>
    </AppBar>
);
}

export default Header;
