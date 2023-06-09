import * as api from "./api";

const baseUrl = "/data/cards";

export const getSevenLatest = async () => {
  return await api.get("/data/cards");
};

export const getOne = async (cardId) => {
  return await api.get(`/data/cards/${cardId}`);
};

export const remove = async (cardId) => {
  return await api.del(`/data/cards/${cardId}`);
};

export const createCard = async (data) => await api.post(baseUrl, data);

export const editCard = async (data, id) => await api.put(`${baseUrl}/${id}`, data);