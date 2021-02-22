import Vue from 'vue'
import App from './page1.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
