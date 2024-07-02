import axios from 'axios';

 const api = axios.create({
    baseURL: 'https://api.tvmaze.com/',
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 10000
})

export default api