import * as api from './api';

export const getSevenLatest = async () => await api.get('/data/ads');

