import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

import '@/utils/flexible'

import { Button } from 'vant';
import 'vant/lib/index.css';

Vue.config.productionTip = false;
Vue.use(Button);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')