import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-type": "application/json",
  },
});

httpClient.interceptors.request.use((config) => {
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2NmMjYyNDliM2E0YzdmYTY4YjhjZTdmYzE0MzZlNiIsIm5iZiI6MTc1NTU1MTM4Ny4zMjcwMDAxLCJzdWIiOiI2OGEzOTY5YjIwZTcxZWZlMGY0MzBlMjMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Kh8RE0hnzXVtlrsfDbVLdaDCpKv0pzGbVW_lO9g1XDw"
  config.headers.Authorization = `Bearer ${token}`
  return config
})