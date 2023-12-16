import { createRouter, createWebHistory } from 'vue-router';
import MainComponent from '../components/MainComponent.vue'
import ListSuppliersComponent from '../components/ListSuppliersComponent.vue'

const routes = [
  {
    path: '/',
    name: 'MainComponent',
    component: MainComponent
  },
  {
    path: '/listSuppliersComponent',
    name: 'ListSuppliersComponent',
    component: ListSuppliersComponent
  },  
  // Añade aquí más rutas según sea necesario
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;