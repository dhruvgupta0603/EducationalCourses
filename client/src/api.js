import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Change port if your backend uses a different one
});

export default api;