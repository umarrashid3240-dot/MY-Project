import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true, // login sessions ke liye
});

export default api;



// backend request send karne ke liye

// import api from "../apis/axios";

// const getUsers = async () => {
//   const response = await api.get("/auth/users");
//   console.log(response.data);
// };
