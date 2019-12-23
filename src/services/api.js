import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ec2-54-163-234-44.compute-1.amazonaws.com:5432',
});

export default api;