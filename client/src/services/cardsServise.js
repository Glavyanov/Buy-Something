import * as api from "./api";

const baseUrl = "/data/ads";

export const getSevenLatest = async () => {
  return await api.get("/data/ads");
};

export const getOne = async (cardId) => {
  return await api.get(`/data/ads/${cardId}`);
};

export const createCard = async (data) => await api.post(baseUrl, data);
