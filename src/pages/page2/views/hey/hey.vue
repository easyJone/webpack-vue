<template>
  <div class="hey-box">
    {{content}}
  </div>
</template>

<script>
  export default {
    props: {
      content: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        
      }
    }
  }
</script>

<style scoped>
  
</style>