import axios from "axios";

const api = axios.create({
  baseURL: "https://me-frontend-challenge-api.herokuapp.com/",
  headers: {
    "User-Agent": {
      "Content-Type": "application/json",
    },
  },
});

export default api;
