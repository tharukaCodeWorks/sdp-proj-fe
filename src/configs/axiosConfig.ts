// axiosConfig.ts
import axios from 'axios';

const configureAxios = (token: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export default configureAxios;
