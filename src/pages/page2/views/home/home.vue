<template>
  <div class="home-page">
    <h1>HOME页面</h1>
    <h2>{{url || '没有正常读取到全局变量'}}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      url: process.env.VUE_APP_URL
    }
  },
  created () {
    // const a = this.$createAAa({
    //   $props: {
    //     text: 'ninini'
    //   },
    //   $events: {
    //     clickTop: (data) => {
    //       alert(data)
    //     }
    //   }
    // }).show()
    // setTimeout(() => {
    //   a.remove()
    // },1000)
    this.$hey.showHey({content: 'nihao'})
    
  }
}
</script>

<style lang="scss" scoped>
/* @import "@/styles/variables.scss"; */
h1 {
  color: $a;
  font-size: $b;
}
</style>