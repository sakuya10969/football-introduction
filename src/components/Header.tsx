import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const Header = () => {
    return (
        <AppBar component="header" position="static" sx={{color: "white", backgroundColor: "black"}}>
            <Toolbar>
                {/* ロゴ部分 */}
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Premier League Big6
                </Typography>

                {/* 各チームへのリンクボタン */}
                <Box>
                <Button color="inherit" href="/teams/arsenal">
                    Arsenal
                </Button>
                <Button color="inherit" href="/teams/chelsea">
                    Chelsea
                </Button>
                <Button color="inherit" href="/teams/liverpool">
                    Liverpool
                </Button>
                <Button color="inherit" href="/teams/man-city">
                    Man City
                </Button>
                <Button color="inherit" href="/teams/man-united">
                    Man United
                </Button>
                <Button color="inherit" href="/teams/tottenham">
                    Tottenham
                </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
