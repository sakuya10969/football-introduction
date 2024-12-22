import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api-football.com/v3',
  headers: {
    'X-Auth-Token': process.env.FOOTBALL_API_KEY,
  },
});

export const fetchTeamById = async (teamId: number) => {
  try {
    const response = await apiClient.get(`/teams/${teamId}`);
    return response.data.team;
  } catch (error) {
    throw error;
  }
};
