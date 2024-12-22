"use client";

import { Box } from "@mui/material";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SignUpForm from "../../components/SignUpForm";
import { signUp } from "../../firebase/auth"; 

export default function SignUp() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Box sx={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
        <Header heading={"Premier League Big6"} />
      </Box>
      <Box sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center", 
        }}>
          <SignUpForm onSignUp={signUp} />
      </Box>
      <Box sx={{ position: "sticky", bottom: 0, zIndex: 1, width: "100%" }}>
        <Footer />
      </Box>
    </Box>
  );
}
