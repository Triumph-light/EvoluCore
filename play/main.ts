import { createApp } from 'vue';
import App from './App.vue';
import evolucore from '@EvoluCore/components';

const app = createApp(App);

app.use(evolucore).mount('#app');
