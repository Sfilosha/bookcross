import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://69f39604bd2396bf531039f1.mockapi.io/api/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
