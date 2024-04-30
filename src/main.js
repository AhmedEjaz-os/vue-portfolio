import './assets/main.css'
import { createMemoryHistory, createRouter } from 'vue-router';
import { createApp } from 'vue';
import App from './App.vue';

const routes = [
    { path: '/', component: App }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app');
