import axios from 'axios';

const api = axios.create({
    baseURL: 'https://entregasback.herokuapp.com/',
});

export default api;