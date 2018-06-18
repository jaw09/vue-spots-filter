<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-8">
        <div class="tag my-3">
          <h3>Showing <span class="text-primary">{{data.length}}</span> results by ...</h3>
        </div>
        <spots-block v-for="item in data" :key="item._id" :item="item">
          <!-- <router-link tag="li" :to="{ name: 'content', params: { id: item._id }}"><a>{{item.Name}}</a></router-link> -->
        </spots-block>
      </div>
    </div>
  </div>
</template>

<script>
import SpotsBlock from './SpotsBlock'
export default {
  computed: {
    data () {
      return this.$store.getters.data
    }
  },
  components: {
    SpotsBlock
  }
}
</script>
