<template>
  <div>
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <br><br>
    <button @click="increment">+</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment 1s later</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: mapGetters([
      'evenOrOdd'
    ]),
    methods: mapActions([
      'increment',
      'incrementIfOdd',
      'incrementAsync'
    ])
  }
</script>
