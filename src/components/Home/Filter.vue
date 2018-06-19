<template>
  <div class="filter p-3">
    <div class="select">
      <h5 class="mb-3">區域</h5>
      <select @change="changeZone">
        <option value="">All</option>
        <option v-for="(zone, id) in zones" :key="id" :value="zone">{{zone}}</option>
      </select>
      <div class="select__arrow"></div>
    </div>
    <hr>
    <div class="control-group">
      <h5 class="mb-3">進階篩選</h5>
      <label class="control control--checkbox">全天候開放
        <input type="checkbox" :checked="allDay" @change="changeAllDay"/>
        <div class="control__indicator"></div>
      </label>
      <label class="control control--checkbox">免費參觀
        <input type="checkbox" :checked="free" @change="changeFree"/>
        <div class="control__indicator"></div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ['allDay', 'free', 'zone'],
  methods: {
    changeZone (e) {
      this.$emit('changeZone', e.target.value)
    },
    changeAllDay () {
      this.$emit('changeAllDay', !this.allDay)
    },
    changeFree () {
      this.$emit('changeFree', !this.free)
    }
  },
  computed: {
    zones () {
      return this.$store.getters.zones
    }
  }
}
</script>

<style lang="scss">
@import 'bootstrap/scss/_functions.scss';
@import '../../assets/helpers/_variables.scss';

.filter {
  background: $gray-500;
}

.select {
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
  width: 100%;
  select {
    display: inline-block;
    width: 100%;
    cursor: pointer;
    padding: 10px 15px;
    outline: 0;
    border: 0;
    border-radius: 0;
    background: $gray-100;
    color: $gray-400;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    &::-ms-expand {
      display: none;
    }
    &:hover,
    &:focus {
      color: $black;
      background: $gray-300;
    }
    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
}
.select__arrow {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 0;
  height: 0;
  pointer-events: none;
  border-style: solid;
  border-width: 8px 5px 0 5px;
  border-color: $gray-500 transparent transparent transparent;
  .select select:hover ~ & .select select:focus ~ & {
    border-top-color: $black;
  }
  .select select:disabled ~ & {
    border-top-color: $gray-500;
  }
}

.control {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 18px;
  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
}
.control__indicator {
  position: absolute;
  top: 2px;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: $white;
  transition: all 0.3s;
  .control:hover input ~ & {
    background: #c8c8c8;
  }
  .control input:checked ~ & {
    background-color: $primary;
  }
  .control:hover input:checked ~ & {
    background-color: $secondary;
  }
  &:after {
    content: '';
    position: absolute;
    display: none;
    .control input:checked ~ & {
      display: block;
    }
    .control--checkbox & {
      left: 7px;
      top: 2px;
      width: 8px;
      height: 13px;
      border: solid $white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
}
</style>
