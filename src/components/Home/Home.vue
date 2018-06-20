<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <app-filter @changeZone="changeZone" @changeAllDay="changeAllDay" @changeFree="changeFree"></app-filter>
      </div>
      <div class="col-md-8">
        <div class="tag-group my-3">
          <h3>Showing <span class="text-primary">{{data.length}}</span> results by ...</h3>
          <div class="tags">
            <button v-if="zone !== ''" class="tag" @click="changeZone('')">
              {{zone}}
                <i class="far fa-times-circle ml-2"></i>
            </button>
            <button v-if="allDay" class="tag" @click="changeAllDay(false)">
              全天候開放
                <i class="far fa-times-circle ml-2"></i>
            </button>
            <button v-if="free" class="tag" @click="changeFree(false)">
              免費參觀
                <i class="far fa-times-circle ml-2"></i>
            </button>
            <button v-if="search !== ''" class="tag" @click="searchData">
              {{search}}
                <i class="far fa-times-circle ml-2"></i>
            </button>
          </div>
        </div>
        <spots-block v-for="item in data" :key="item._id" :item="item"></spots-block>
      </div>
    </div>
  </div>
</template>

<script>
import SpotsBlock from './SpotsBlock'
import Filter from './Filter'

export default {
  methods: {
    changeZone (zone) {
      const vm = this
      vm.$store.dispatch('filterData', {
        allDay: vm.allDay,
        free: vm.free,
        zone: zone,
        search: vm.search
      })
      vm.$store.dispatch('changeZone', zone)
    },
    changeAllDay (allDay) {
      const vm = this
      vm.$store.dispatch('filterData', {
        allDay: allDay,
        free: vm.free,
        zone: vm.zone,
        search: vm.search
      })
      vm.$store.dispatch('changeAllDay', allDay)
    },
    changeFree (free) {
      const vm = this
      vm.$store.dispatch('filterData', {
        allDay: vm.allDay,
        free: free,
        zone: vm.zone,
        search: vm.search
      })
      vm.$store.dispatch('changeFree', free)
    },
    searchData () {
      const vm = this
      vm.$store.dispatch('filterData', {
        allDay: vm.allDay,
        free: vm.free,
        zone: vm.zone,
        search: ''
      })
      vm.$store.dispatch('changeSearch', '')
    }
  },
  computed: {
    data () {
      return this.$store.getters.data
    },
    search () {
      return this.$store.getters.search
    },
    allDay () {
      return this.$store.getters.allDay
    },
    free () {
      return this.$store.getters.free
    },
    zone () {
      return this.$store.getters.zone
    }
  },
  components: {
    SpotsBlock,
    AppFilter: Filter
  }
}
</script>

<style lang="scss">
@import 'bootstrap/scss/_functions.scss';
@import '../../assets/helpers/_variables.scss';

.tag {
  border: 1px solid $primary;
  border-radius: 20px;
  padding: 5px 10px;
  background: $gray-100;
  color: $primary;
  font-size: 1rem;
  transition: all 0.2s;
  &:hover {
    background: $primary;
    color: $white;
  }
  &:focus {
    outline: none;
  }
}
</style>
