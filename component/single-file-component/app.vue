<template>
  <p>{{ greeting }} world.</p>
</template>

<script>
  module.exports = {
    data: function() {
      return {
        greeting: 'Hello'
      }
    }
  }
</script>

<style scoped>
  p {
    font-size: 1.2em;
    text-align: center;
  }
</style>
