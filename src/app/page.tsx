import { Box } from "@mui/material";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PremierLeagueLogo from "@/components/PremierLeagueLogo";

export default function Home() {
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
          alignItems: "center", 
        }}>
        <PremierLeagueLogo />
      </Box>
      <Box sx={{ position: "sticky", bottom: 0, zIndex: 1, width: "100%" }}>
        <Footer />
      </Box>
    </Box>
  );
}
