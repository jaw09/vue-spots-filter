<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <router-link class="navbar-brand text-white text-bold text-animation" to="/">
      Kaoshung's Scenic Spots
    </router-link>
      <form class="my-2 my-lg-0 w-50" onSubmit="return false;">
        <input class="ml-3"
              type="text"
              placeholder="Explore your own activities"
              aria-label="Search"
              @keyup.enter.prevent="searchData">
        <span class="separator"> </span>
      </form>
</nav>
</template>

<script>
export default {
  methods: {
    searchData (e) {
      const vm = this
      vm.$store.dispatch('filterData', {
        allDay: vm.allDay,
        free: vm.free,
        zone: vm.zone,
        search: e.target.value
      })
      vm.$store.dispatch('changeSearch', e.target.value)
      e.target.value = ''
    }
  },
  computed: {
    allDay () {
      return this.$store.getters.allDay
    },
    free () {
      return this.$store.getters.free
    },
    zone () {
      return this.$store.getters.zone
    }
  }
}
</script>

<style lang="scss">
@import 'bootstrap/scss/_functions.scss';
@import '../assets/helpers/_variables.scss';

.text-bold {
  font-weight: bold;
}

input[type='text'] {
  width: 100%;
  padding: 0.5rem 10px;
  background: none;
  color: $white;
  border: none;
  border-bottom: 1px solid $gray-100;
  &:focus + .separator {
    transform: scaleX(1) translateY(-2px) translateX(18px);
    opacity: 1;
  }
}

.separator {
  height: 3px;
  width: 100%;
  background: $white;
  display: block;
  transform: scaleX(0) translateY(-2px) translateX(2px);
  transform-origin: 50%;
  opacity: 0;
  transition: all 0.2s linear;
}
</style>
