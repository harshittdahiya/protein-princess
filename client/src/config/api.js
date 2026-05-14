import axios from "axios";

const DEFAULT_PRODUCTION_API_URL = "https://protein-princess-backend.onrender.com";

export const API_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.PROD ? DEFAULT_PRODUCTION_API_URL : "");

if (!API_URL) {
  throw new Error("Missing VITE_API_URL. Set it in Vercel and client/.env.");
}

const api = axios.create({
  baseURL: `${API_URL}/api`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "null");

  if (userInfo?.token) {
    config.headers.Authorization = `Bearer ${userInfo.token}`;
  }

  return config;
});

export default api;
