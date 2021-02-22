<template>
<div>
  <div class="hello-container">{{text}}</div>
  <div @click="clickTop">点击头部</div>
</div>
</template>

<script>
  export default {
    name: 'AAa',
    props: {
      text: {
        type: String,
        default: '默认'
      }
    },
    data() {
      return {
        
      }
    },
    methods: {
      clickTop () {
        this.$emit('clickTop', '点击了头部')
      }
    }
  }
</script>

<style lang="" scoped>
  
</style>