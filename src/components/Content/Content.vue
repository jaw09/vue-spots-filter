<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-3">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a class="breadcrumb-link" @click="$router.go(-1)">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">{{showData[0].Name}}</li>
          </ol>
        </nav>
        <div class="card">
          <div class="content-img img" :style="{backgroundImage: `url(${showData[0].Picture1})`}"></div>
          <!-- <img class="card-img-top" :src="showData[0].Picture1" alt="Card image cap"> -->
          <div class="card-body p-5">
            <h2 class="card-title text-primary">{{showData[0].Name}}</h2>
            <p class="zone text-white">{{showData[0].Zone}}</p>
            <div class="d-flex justify-content-start mt-3">
              <span class="mr-3">
                <i class="fas fa-map-marker-alt mr-2"></i><span class="icon-text">{{showData[0].Add}}</span>
              </span>
              <span class="mr-3" v-if="showData[0].Ticketinfo !== ''">
                <i class="fas fa-dollar-sign mr-2"></i><span class="icon-text">{{showData[0].Ticketinfo}}</span>
              </span>
              <span>
                <i class="fas fa-calendar-alt mr-2"></i><span class="icon-text">{{showData[0].Opentime}}</span>
              </span>
            </div>
            <p class="mt-4 card-text">{{showData[0].Description}}</p>
          </div>
        </div>
      </div>
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

<style lang="scss">
@import 'bootstrap/scss/_functions.scss';
@import '../../assets/helpers/_variables.scss';

.breadcrumb-item {
  a.breadcrumb-link {
    color: $primary;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      color: $secondary;
    }
  }
}

.img.content-img {
  height: 350px;
}

.icon-text {
  color: $gray-500;
}
</style>
