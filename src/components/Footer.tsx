import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
      <AppBar
      component="footer"
      position="static"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Toolbar sx={{ justifyContent: "center", flexDirection: "column" }}>
        {/* 著作権部分 */}
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          &copy; 2024 Premier League Big6. All Rights Reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
