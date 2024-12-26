import React from 'react';
import { Box, Card, CardContent, Typography, Stack } from '@mui/material';

type Player = {
  id: number;
  name: string;
  number: number;
  position: string;
  nationality: string;
  age: number;
};

type PlayerListProps = {
  players: Player[];
};

const TeamPlayerList = ({ players }: PlayerListProps) => {
  return (
    <Box sx={{ marginTop: 3 }}>
      <Typography variant="h6" gutterBottom>
        選手一覧
      </Typography>
      <Stack direction="row" flexWrap="wrap" spacing={2}>
        {players.map((player) => (
          <Card
            key={player.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: 2,
              width: 'calc(33.33% - 16px)', 
              minWidth: '250px',
              boxSizing: 'border-box',
            }}
          >
            <Box sx={{ marginRight: 2 }}>
              <Typography variant="h4" color="primary">
                {player.number}
              </Typography>
            </Box>
            <CardContent>
              <Typography variant="h6">{player.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                ポジション: {player.position}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                国籍: {player.nationality}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                年齢: {player.age}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default TeamPlayerList;
