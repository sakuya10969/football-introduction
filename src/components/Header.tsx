"use client";

import React from "react";

import { AppBar, Toolbar, IconButton, Typography, Box, Button } from "@mui/material";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Link from "next/link";
import useAuth from "../hooks/useAuth";
import auth from "../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const Header = () => {
    const { user, loading } = useAuth();
    const router = useRouter();
    const handleSignOut = async () => {
        await signOut(auth);
        router.push("/signin");
    }
    if (loading) {
        return <Typography variant="h4" sx={{ textAlign: "center" }}>Loading...</Typography>
    }

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

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {user ? (
                    <Button
                    onClick={handleSignOut}
                    variant="outlined"
                    sx={{
                        color: 'white',
                        backgroundColor: 'black',
                        textTransform: 'none',
                        fontSize: '1.1rem',
                    }}
                    >
                    Sign Out
                    </Button>
                ) : (
                    <>
                    <Link href="/signup" passHref>
                        <Button
                        variant="outlined"
                        sx={{
                            color: 'white',
                            backgroundColor: 'black',
                            textTransform: 'none',
                            fontSize: '1.1rem',
                        }}
                        >
                        Sign Up
                        </Button>
                    </Link>
                    <Link href="/signin" passHref>
                        <Button
                        variant="outlined"
                        sx={{
                            color: 'white',
                            backgroundColor: 'black',
                            textTransform: 'none',
                            fontSize: '1.1rem',
                            ml: 3,
                        }}
                        >
                        Sign In
                        </Button>
                    </Link>
                    </>
                )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
