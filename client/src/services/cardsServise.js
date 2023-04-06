import * as api from "./api";

const baseUrl = "/data/cards";

export const getSevenLatest = async () => {
  return await api.get("/data/cards");
};

export const getOne = async (cardId) => {
  return await api.get(`/data/cards/${cardId}`);
};

export const createCard = async (data) => await api.post(baseUrl, data);
