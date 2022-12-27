import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sujeitoprogramador.com/'
})
// r-api/?api=filmes
export default api;