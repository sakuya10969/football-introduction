"use client"

import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, Stack, Divider, Button } from "@mui/material";
import { useRouter } from "next/navigation"

import { TeamData } from "@/type";

const TeamDataCard = ({
  teamName,
  logo,
  country,
  founded,
  league,
  stadium,
  capacity,
  stadiumImage,
  color,
  backgroundColor
  
}: TeamData) => {
  const router = useRouter();
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Card sx={{ width: "700px", height: "600px", boxShadow: 4, borderRadius: 5 }}>
        {/* チームロゴ */}
        <CardMedia
          component="img"
          alt={`${teamName} Logo`}
          height="100"
          image={logo}
          sx={{ objectFit: "contain", p: 2 }}
        />
        <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Stack spacing={2}>
            {/* チーム名 */}
            <Typography variant="h5" component="div" align="center">
              {teamName}
            </Typography>

            {/* リーグ名 */}
            <Typography variant="subtitle1" color="text.primary" align="center">
              <strong>所属リーグ:</strong> {league}
            </Typography>

            <Divider />

            {/* 基本情報 */}
            <Typography variant="body2" color="text.secondary" align="center">
              <strong>国:</strong> {country}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              <strong>設立:</strong> {founded}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              <strong>スタジアム:</strong> {stadium}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              <strong>都市:</strong> {capacity}
            </Typography>
          </Stack>
        </CardContent>

        {/* スタジアム画像 */}
        <CardMedia
          component="img"
          alt={`${stadium || "Stadium"} Image`}
          height="250"
          image={stadiumImage}
          sx={{ objectFit: "cover" }}
        />
        </Card>
        <Button
        onClick={() => router.back()}
        sx={{
            color: color,
            backgroundColor: backgroundColor,
            mt: 2,
            width: "100px",
            textAlign: "center"
        }}>
              戻る
        </Button>
    </Box>
  );
};

export default TeamDataCard;
