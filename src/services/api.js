import axios from 'axios';
axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': window.csrf_token
};
const api = axios.create({
    baseURL: 'http://localhost:8000',
});

export default api;