import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

type FooterProps = {
  color?: string;
  backgroundColor?: string;
}

const Footer = ({ color="white", backgroundColor="black" }: FooterProps) => {
  return (
      <AppBar
      component="footer"
      position="static"
      sx={{
        top: "auto",
        bottom: 0,
        color: color,
        backgroundColor: backgroundColor,
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
