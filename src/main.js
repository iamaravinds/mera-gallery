import { createApp } from 'vue';
import { createPinia } from 'pinia';
import GolemComponents from 'golem-components';
import 'golem-components/dist/style.css';

import App from './App.vue';
import router from './router';

import './assets/main.scss';

const app = createApp(App);

app.use(GolemComponents);
app.use(createPinia());
app.use(router);

app.mount('#app');
