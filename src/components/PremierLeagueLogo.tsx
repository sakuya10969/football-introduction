import React from "react";
import { Box, Typography } from "@mui/material";

const PremierLeagueLogo = () => {
  return (
    <Box
      sx={{
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" component="h1" sx={{ marginBottom: 5 }}>
        ようこそプレミアリーグへ！ <br />
        Welcome to Premier League!!      
      </Typography>
      <Box
        component="img"
        src="premier-league-2024.jpg"
        alt="プレミアリーグのロゴ"
        sx={{
          width: "900px",
          height: "auto",
        }}
      />
    </Box>
  );
};

export default PremierLeagueLogo;
