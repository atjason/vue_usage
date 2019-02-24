<template>
  <counter></counter>
</template>

<script>
  import Counter from './Counter.vue'
  import store from './store.js'

  export default {
    store,
    components: {
      Counter
    }
  }
</script>