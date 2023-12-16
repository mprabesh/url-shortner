import axios from "axios";
const baseURL = "prabeshURL/";

export const processURL = async (originalURL) => {
  const response = await axios.post(`${baseURL}shorten`, { originalURL });
  return response.data;
};
