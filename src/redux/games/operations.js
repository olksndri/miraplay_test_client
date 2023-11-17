import axios from "axios";

const gamesBaseUrl = "https://api.miraplay.cloud/games/by_page";

export const getGames = async (body) => {
  const response = await axios.post(gamesBaseUrl, body);
  return response.data;
};
