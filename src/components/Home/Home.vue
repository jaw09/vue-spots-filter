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
            <button v-if="zone !== ''" class="tag">
              {{zone}}
                <i class="far fa-times-circle ml-2"></i>
            </button>
            <button v-if="allDay" class="tag">
              全天候開放
                <i class="far fa-times-circle ml-2"></i>
            </button>
            <button v-if="free" class="tag">
              免費參觀
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
  data () {
    return {
      free: false,
      allDay: false,
      zone: ''
    }
  },
  methods: {
    changeZone (zone) {
      this.zone = zone
    },
    changeAllDay (allDay) {
      this.allDay = allDay
    },
    changeFree (free) {
      this.free = free
    }
  },
  computed: {
    data () {
      return this.$store.getters.data
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
