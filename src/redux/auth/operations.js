import axios from "axios";

axios.defaults.baseURL = "https://miraplay-test-server-p2yu.onrender.com";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

//? POST => { "email", "password" }
export const signUp = async (body) => {
  //   console.log(body);
  const response = await axios.post("/auth/signup", body);
  return response.data;
};

//? POST => { "email", "password" }
export const signIn = async (body) => {
  //   console.log(body);

  const response = await axios.post("/auth/signin", body);
  return response.data;
};

//? GET => {}
export const refreshUser = async (token) => {
  setAuthHeader(token);
  const response = await axios.get("/auth");
  return response.data;
};
