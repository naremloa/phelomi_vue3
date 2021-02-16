import { createApp } from 'vue';
import { createRouter } from './router';
import App from './App.vue';
import './styles/index.css';

import { worker } from './mocks/browser';

worker.start();

const app = createApp(App);
const router = createRouter();
app.use(router);
app.mount('#app');
