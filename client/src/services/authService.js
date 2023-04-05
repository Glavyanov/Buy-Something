import * as api from "./api.js";

export const authServiceFactory = () => {
  return {
    login: (data) => api.post("/users/login", data),
    register: (data) => api.post("/users/register", data),
    logout: () => api.get("/users/logout"),
  };
};
