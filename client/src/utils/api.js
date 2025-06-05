import axios from 'axios';


// const BASE_URL = '/api';

// const BASE_URL = 'http://localhost:5000/api';

const BASE_URL = 'https://mbilalhussain-folio-53af3d2e7767.herokuapp.com/api';

const api = axios.create({
  baseURL: BASE_URL,  
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
