<template>
  <div id="app">
    <h1>Test Success</h1>
    <router-view/>
    {{data}}
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    data () {
      return this.$store.getters.data
    }
  },
  created () {
    const vm = this
    vm.$store.dispatch('setData')
  }
}
</script>

<style lang="scss">
</style>
