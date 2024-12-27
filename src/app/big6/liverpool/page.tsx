import { Box } from "@mui/material";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchTeamById } from "@/api/api";
import TeamDataCard from "@/components/TeamDataCard";

const Liverpool = async () => {
    const data = await fetchTeamById(40);

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
                <Header heading={"Liverpool"} color={"white"} backgroundColor={"darkred"} />
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
                    capacity={"Liverpool"}
                    stadiumImage={data.venue.image}
                    color={"white"}
                    backgroundColor={"darkred"}
                />
            </Box>
            <Box sx={{ position: "sticky", bottom: 0, zIndex: 1, width: "100%" }}>
                <Footer color={"white"} backgroundColor={"darkred"} />
            </Box>
        </Box>
    );
}

export default Liverpool;
