import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  data: {}
}

const mutations = {
  'SET_DATA' (state, fetchData) {
    state.data = fetchData
  }
}

const actions = {
  setData ({
    commit
  }) {
    axios.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
      .then(res => {
        const fetchData = res.data.result.records
        console.log(fetchData)
        commit('SET_DATA', fetchData)
      }).catch(err => {
        console.log(err)
      })
  }
}

const getters = {
  data (state) {
    return state.data
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
