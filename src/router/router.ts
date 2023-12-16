import { createRouter, createWebHistory } from 'vue-router';
import MainComponent from '../components/MainComponent.vue'
import ListSuppliersComponent from '../components/ListSuppliersComponent.vue'
import ErrorComponentVue from '../components/ErrorComponent.vue';

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
  {
    path: '/error',
    name: 'Error',
    component: ErrorComponentVue
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;