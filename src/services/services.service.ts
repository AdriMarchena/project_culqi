import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Indpbmdlcmxpb24uY3VscWkiLCJleHAiOjE3MDY5NDIxNjR9.j7_UICJFBvPiHv_bhnoRNprVU_DaML41Vjmd51jcRDI'
const apiClient = axios.create({
  baseURL: 'https://aspexpressapi-production.up.railway.app',
  headers: {
    Authorization: `Bearer ${token}`
  }
});

// Guardar el token en sessionStorage
sessionStorage.setItem('token', token);

export const loadBalance = () => {
  return apiClient.get('/getActualBalance');
};

export const getSuppliers = () => {
  return apiClient.get('/getProviders');
};

export default apiClient;