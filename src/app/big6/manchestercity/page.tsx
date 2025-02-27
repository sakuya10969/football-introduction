import { Box } from "@mui/material";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchTeamById } from "@/api/api";
import TeamDataCard from "@/components/TeamDataCard";

const ManchesterCity = async () => {
    const data = await fetchTeamById(50);

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
                <Header heading={"Manchester City"} color={"white"} backgroundColor={"deepskyblue"} />
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
                    backgroundColor={"deepskyblue"}
                />
            </Box>
            <Box sx={{ position: "sticky", bottom: 0, zIndex: 1, width: "100%" }}>
                <Footer color={"white"} backgroundColor={"deepskyblue"} />
            </Box>
        </Box>
    );
}

export default ManchesterCity;
