import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

import '@/utils/flexible'

import { Button, Form, Field } from 'vant';
import 'vant/lib/index.css';

import '../mock/myMock'

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Form);
Vue.use(Field);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
