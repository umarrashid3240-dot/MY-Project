// // Client/src/api/auth.js
// import axios from "axios";

// const API_URL = "http://localhost:5000/api/auth";

// export const signup = async (userData) => {
//   return await axios.post(`${API_URL}/signup`, userData);
// };

// export const login = async (userData) => {
//   return await axios.post(`${API_URL}/login`, userData);
// };


import api from "./axiosConfig";

export const signup = (data) => api.post("/api/auth/signup", data);
export const login = (data) => api.post("/api/auth/login", data);
