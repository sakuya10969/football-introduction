import { Box } from "@mui/material";

import TeamCard from "@/components/TeamCard";

const big6Teams = [
    { name: "Liverpool", logo: "/big6/liverpool.webp", link: "/big6/liverpool" },
    { name: "Chelsea", logo: "/big6/chelsea.webp", link: "/big6/chelsea" },
    { name: "Manchester City", logo: "/big6/manchester-city.webp", link: "/big6/manchester-city" },
    { name: "Manchester United", logo: "/big6/manchester-united.webp", link: "/big6/manchester-united" },
    { name: "Arsenal", logo: "/big6/arsenal.webp", link: "/big6/arsenal" },
    { name: "Tottenham", logo: "/big6/tottenham.webp", link: "/big6/tottenham" },
];

const Big6 = () => {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 4,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {big6Teams.map((team, index) => (
                <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
                    <TeamCard name={team.name} logo={team.logo} link={team.link} />
                </Box>
            ))}
        </Box>
    );
};


export default Big6;
