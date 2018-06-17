<template>
  <div id="app">
    <h1>Test Success</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    const vm = this
    vm.$store.dispatch('setData')
  }
}
</script>

<style lang="scss">
</style>
