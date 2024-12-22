import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActionArea } from "@mui/material";

type TeamCard = {
    name: string;
    logo: string;
    link: string;
}

const TeamCard: React.FC<TeamCard> = ({ name, logo, link }) => {
    return (
        <Card sx={{ width: 300, margin: 2 }}>
            <CardActionArea component="a" href={link}>
                <CardMedia
                component="img"
                height="160"
                image={logo}
                alt={`${name} logo`}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                    {name}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default TeamCard;
