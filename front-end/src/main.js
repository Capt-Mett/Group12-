import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import verify from './common/verify.js'
import hint from './common/hint.js'
import util from './common/util.js'
import userRequest from './network/userRequest.js'

// 引入Element UI的国际化文件
import locale from 'element-ui/lib/locale/lang/en';

// 将Element UI设置为英文模式
Vue.use(ElementUI, { locale });

Vue.config.productionTip = false

Vue.prototype.$verify = verify;
Vue.prototype.$hint = hint;
Vue.prototype.$util = util;

Vue.prototype.$http = userRequest;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
