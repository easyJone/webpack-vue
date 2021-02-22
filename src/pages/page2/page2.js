import Vue from 'vue'
import App from './page2.vue'
import router from './router'
// import router from '@/pages/page2/router'
// import router from 'aaa/page2/router'
import store from './store'



import helloTip from './views/hello/hello'
Vue.use(helloTip)

import hey from './views/hey/hey'
Vue.use(hey)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
