import { createApp } from 'vue';

import store from './store/index.js';
import router from './router.js';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App)

app.component('base-badge', BaseBadge);

app.use(store).use(router).mount('#app');
