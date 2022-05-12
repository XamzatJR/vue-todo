import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from '@/router/index';
import components from '@/components/UI';

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).use(createPinia()).mount('#app');
