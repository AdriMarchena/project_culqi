import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './router/router.ts';

const app = createApp(App);


app.use(router);

app.mount('#app');
