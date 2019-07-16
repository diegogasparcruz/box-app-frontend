import axios from 'axios';

const api = axios.create({
    baseURL: 'https://boxapp-backend.herokuapp.com'
});

export default api;