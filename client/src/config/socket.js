import { io } from "socket.io-client";
import { API_URL } from "./api";

export const createSocket = () =>
  io(API_URL, {
    transports: ["websocket", "polling"],
    withCredentials: true,
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
  });
