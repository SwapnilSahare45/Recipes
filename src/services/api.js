import axios from 'axios';

const api = axios.create({
    baseURL: "https://recipes-backend-blond.vercel.app/api",
});

export default api;