import axios from 'axios';
import Supplier from '../interfaces/supplier.interface'

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Indpbmdlcmxpb24uY3VscWkiLCJleHAiOjE3MDY5NDIxNjR9.j7_UICJFBvPiHv_bhnoRNprVU_DaML41Vjmd51jcRDI'
const apiClient = axios.create({
  baseURL: 'https://aspexpressapi-production.up.railway.app',
  headers: {
    Authorization: `Bearer ${token}`
  }
});

// Guardar el token en localStorage
localStorage.setItem('token', token);

export const loadBalance = () => {
  return apiClient.get('/getActualBalance');
};

export const getSuppliers: Supplier = () => {
  return apiClient.get('/getProviders');
};

export default apiClient;