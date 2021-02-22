import hey from './hey.vue'


// api方式调用组件
const heyOptions = {}
heyOptions.install = (vue) => {
  // 创建构造器
  const heyConstructor = vue.extend(hey)
  // 初始化实例
  let heyInstance
  const initHeyInstance = () => {
    heyInstance = new heyConstructor()
    const heyEl = heyInstance.$mount().$el
    document.body.appendChild(heyEl)
  }


  // 挂载在原型上
  vue.prototype.$hey = {
    showHey: (options) => {
      if (!heyInstance) {
        initHeyInstance()
      }
      heyInstance.content = options
      return heyInstance
    }
  }
}
export default heyOptions