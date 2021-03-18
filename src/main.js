import { createApp } from 'vue';
import { createRouter } from './router';
import App from './App.vue';
import lazyLoad from './plugins/lazyLoad';
import checkV from './plugins/checkV';
import './styles/index.css';

const app = createApp(App);
const router = createRouter();
app.use(router);
app.use(...lazyLoad);
app.directive('check', {
  beforeMount: () => checkV('beforeMount'),
  beforeUpdate: () => checkV('beforeUpdate'),
  updated: () => checkV('updated'),
  unmounted: () => checkV('unmounted'),
});

app.mount('#app');
