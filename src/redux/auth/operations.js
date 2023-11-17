import axios from "axios";

axios.defaults.baseURL = "https://miraplay-test-server-p2yu.onrender.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const signUp = async (body) => {
  const response = await axios.post("/auth/signup", body);
  return response.data;
};

export const signIn = async (body) => {
  const response = await axios.post("/auth/signin", body);
  return response.data;
};

export const refreshUser = async (token) => {
  setAuthHeader(token);
  const response = await axios.get("/auth");
  return response.data;
};
