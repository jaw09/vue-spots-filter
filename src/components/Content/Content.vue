<template>
  <div class="container">
    <div class="row">
      <h1>Content</h1>
      {{id}}
      {{showData}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    data () {
      return this.$store.getters.data
    },
    showData () {
      return this.data.filter(item => item._id === this.id)
    }
  }
}
</script>
