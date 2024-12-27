import axios from 'axios';

export const fetchTeamById = async (teamId: number) => {
  const apiKey = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY;

  const url = `https://v3.football.api-sports.io/teams?id=${teamId}`;

  try {
    const res = await axios.get(url, {
      headers: {
        'X-Apisports-Key': apiKey,
      },
    });

    console.log("API Key:", apiKey);
    console.log("API Response:", res.data);

    if (!res.data.response || res.data.response.length === 0) {
      throw new Error(`No team found for teamId: ${teamId}`);
    }

    return res.data.response[0];
  } catch (error) {
    console.error("Error fetching team data:", error.response?.data || error.message);
    throw new Error("Failed to fetch team data");
  }
};
