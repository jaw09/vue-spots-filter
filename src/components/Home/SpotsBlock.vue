<template>
  <div class="spot row mb-3">
    <div class="col-md-12 img rounded-xl-left rounded-top" :style="{backgroundImage: `url(${item.Picture1})`}">
    </div>
    <div class="col-sm-12 p-4">
      <div class="block-head d-flex align-items-center mb-3">
        <h3 class="text-primary mr-auto mb-0">{{item.Name}}</h3>
        <p class="m-0 zone text-white">{{item.Zone}}</p>
      </div>
      <p>{{item.Description}}</p>
      <div class="d-flex flex-column justify-content-around">
        <span class="">
          <i class="fas fa-map-marker-alt mr-2"></i>{{item.Add}}
        </span>
        <span v-if="item.Ticketinfo !== ''">
          <i class="fas fa-dollar-sign mr-2"></i>{{item.Ticketinfo}}
        </span>
        <span>
          <i class="fas fa-calendar-alt mr-2"></i>{{item.Opentime}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="scss">
@import 'bootstrap/scss/_functions.scss';
@import '../../assets/helpers/_variables.scss';

.spot {
  border-radius: 10px;
  background-color: #fff;
}

.img {
  height: 220px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.zone {
  width: 80px;
  border-radius: 10px;
  background-color: $gray-300;
  text-align: center;
}

@media (min-width: 768px) {
}

// @media (min-width: 1200px) {
//   .rounded-xl-left {
//     border-top-right-radius: unset !important;
//     border-bottom-left-radius: 0.25rem;
//   }
//   .img {
//     height: auto;
//   }
// }
</style>
