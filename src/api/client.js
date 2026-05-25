import axios from 'axios';

const BASE_URL = "http://localhost:3001/";

const clientAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default clientAxios;