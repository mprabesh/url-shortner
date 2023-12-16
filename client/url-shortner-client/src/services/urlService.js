import axios from "axios";
const baseURL = "http://localhost:5000/prabeshURL";

export const processURL = async (originalURL) => {
  const response = await axios.post(`${baseURL}/shorten`, { originalURL });
  return response.data;
};
