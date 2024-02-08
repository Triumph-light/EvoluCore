import { createApp } from 'vue';
import evolucore from '@EvoluCore/components';
import App from './App.vue';

const app = createApp(App);

app.use(evolucore);
app.mount('#app');
