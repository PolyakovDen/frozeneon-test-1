import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

createApp(App)
  .use(router)
  .use(createPinia())
  .use(
    createVuetify({
      components,
      directives,
    })
  )
  .mount('#app');
