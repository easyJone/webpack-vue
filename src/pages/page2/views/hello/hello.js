import CreateApi from 'vue-create-api'
import Hello from './hello.vue'



const helloTip = {}
helloTip.install = (Vue) => {
  Vue.use(CreateApi, {
    componentPrefix: 'lcs-'
  })
  Vue.createAPI(Hello, true) // 单例
}
export default helloTip