import { Box } from "@mui/material";

import Header from "../components/Header";
import Footer from "../components/Footer";

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
        <Header />
      </Box>

      <Box sx={{ flex: 1, width: "100%" }}>
        {/* 中央のコンテンツをここに入れる */}
      </Box>

      <Box sx={{ position: "sticky", bottom: 0, zIndex: 1, width: "100%" }}>
        <Footer />
      </Box>
    </Box>
  );
}
