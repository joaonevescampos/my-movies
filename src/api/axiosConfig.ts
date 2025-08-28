import axios from "axios";
const token = import.meta.env.VITE_TOKEN;

export const httpClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-type": "application/json",
  },
});

httpClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`
  return config
})