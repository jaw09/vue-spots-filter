<template>
  <div class="container">
    <div class="row">
      <h1>Home</h1>
      <ul v-for="item in data" :key="item._id">
        <router-link tag="li" :to="{ name: 'content', params: { id: item._id }}"><a>{{item.Name}}</a></router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$store.getters.data
    }
  }
}
</script>
