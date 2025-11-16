import { api } from "./client";

export const AuthAPI = {
  signup: (data: any) => api.post("/auth/signup", data),
  login: (data: any) => api.post("/auth/login", data),
  forgot: (data: any) => api.post("/reset/forgot", data),
  reset: (data: any) => api.post("/reset/reset", data),
};
