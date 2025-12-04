import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Backend URL
});

// Request interceptor for adding token
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token"); // Token stored after login
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
