import * as api from './api';

export const getThreeLatest = async () => await api.get('/data/ads');

