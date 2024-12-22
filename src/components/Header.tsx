import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Box, Button } from "@mui/material";
import Link from "next/link";

const Header = () => {
    return (
        <AppBar component="header" position="static" sx={{ color: "white", backgroundColor: "black" }}>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
                        <SportsSoccerIcon fontSize="large" />
                    </IconButton>
                    <Typography variant="h6">
                        Premier League Big6
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Link href="/signup" passHref>
                        <Button
                            variant="outlined"
                            sx={{
                                color: "white",
                                backgroundColor: "black",
                                textTransform: "none",
                                fontSize: "1.1rem",
                            }}
                        >
                            Sign Up
                        </Button>
                    </Link>
                    <Link href="/signin" passHref>
                        <Button
                            variant="outlined"
                            sx={{
                                color: "white",
                                backgroundColor: "black",
                                textTransform: "none",
                                fontSize: "1.1rem",
                                ml: 3,
                            }}
                        >
                            Sign In
                        </Button>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
