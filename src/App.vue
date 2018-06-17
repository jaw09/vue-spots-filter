<template>
  <div id="app">
    <app-navbar></app-navbar>
    <h1>Test Success</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    AppNavbar: Navbar
  },
  created () {
    const vm = this
    vm.$store.dispatch('setData')
  }
}
</script>

<style lang="scss">
</style>
