import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import BaseModal from './components/BaseModal.vue';
import UsersList from './components/UsersList.vue'
const app = createApp(App);

app.component('BaseModal', BaseModal);
app.component('UsersList', UsersList);


app.use(router)

router.isReady().then(() => {
    app.mount('#app');
})