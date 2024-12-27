import { Box } from "@mui/material";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchTeamById } from "@/api/api";
import TeamDataCard from "@/components/TeamDataCard";

const Arsenal = async () => {
    const data = await fetchTeamById(42);

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
                <Header heading={"Arsenal"} color={"white"} backgroundColor={"crimson"} />
            </Box>
            <Box sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center", 
            }}>
                <TeamDataCard
                    teamName={data.team.name}
                    logo={data.team.logo}
                    country={data.team.country}
                    founded={data.team.founded}
                    league={"Premier League"}
                    stadium={data.venue.name}
                    capacity={"London"}
                    stadiumImage={data.venue.image}
                    color={"white"}
                    backgroundColor={"crimson"}
                />
            </Box>
            <Box sx={{ position: "sticky", bottom: 0, zIndex: 1, width: "100%" }}>
                <Footer color={"white"} backgroundColor={"crimson"} />
            </Box>
        </Box>
    );
}

export default Arsenal;
