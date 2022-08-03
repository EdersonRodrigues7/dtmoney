import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL
});

export const useApi = () => ({
  register: async (name: string, email: string, password: string) => {
    const response = await api.post('http://localhost:3332/register', { name, email, password });
    return response.data;
  },
  validateToken: async (token: string) => {
    const response = await api.post('http://localhost:3332/validate', { token });
    return response.data;
  },
  signin: async (email: string, password: string) => {
    const response = await api.post(`http://localhost:3332/login`, { email, password });
    return response.data;
  },
  signout: async () => {
    const response = await api.post('http://localhost:3332/logout');
    return response.data;
  }
});
