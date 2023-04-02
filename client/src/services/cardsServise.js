import * as api from './api';

const baseUrl = '/data/ads';

export const getSevenLatest = async () => await api.get('/data/ads');

export const createCard = async(data) => await api.post(baseUrl, data);