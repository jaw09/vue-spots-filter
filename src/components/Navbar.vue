<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
    <router-link class="navbar-brand text-white text-bold text-animation" to="/">
      Kaoshung's Scenic Spots
    </router-link>
      <form class="my-2 my-lg-0 w-50">
        <input class="ml-3" type="search" placeholder="Explore your own activities" aria-label="Search">
        <span class="separator"> </span>
      </form>
</nav>
</template>

<style lang="scss">
@import 'bootstrap/scss/_functions.scss';
@import '../assets/helpers/_variables.scss';

.text-bold {
  font-weight: bold;
}

input[type='search'] {
  width: 100%;
  padding: 0.5rem 10px;
  background: none;
  color: $white;
  border: none;
  border-bottom: 1px solid $gray-100;
  &:focus + .separator {
    transform: scaleX(1) translateY(-2px);
    opacity: 1;
  }
}

.separator {
  height: 3px;
  width: 100%;
  background: $white;
  display: block;
  transform: scaleX(0) translateY(-2px);
  transform-origin: 50%;
  opacity: 0;
  transition: all 0.2s linear;
}
</style>
