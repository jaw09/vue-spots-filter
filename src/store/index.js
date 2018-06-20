import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  data: {},
  filterData: [],
  zones: [],
  used: false,
  search: '',
  free: false,
  allDay: false,
  zone: ''
}

const mutations = {
  'SET_DATA' (state, fetchData) {
    const tempZones = []
    state.data = fetchData
    state.data.forEach(item => {
      tempZones.push(item.Zone)
    })
    let set = new Set(tempZones)
    state.zones = [...set]
  },
  'FILTER_DATA' (state, filterData) {
    state.used = true
    state.filterData = filterData
  },
  'CHANGE_SEARCH' (state, keyWord) {
    state.search = keyWord
  },
  'CHANGE_ZONE' (state, keyWord) {
    state.zone = keyWord
  },
  'CHANGE_ALL_DAY' (state, keyWord) {
    state.allDay = keyWord
  },
  'CHANGE_FREE' (state, keyWord) {
    state.free = keyWord
  }
}

const actions = {
  setData ({
    commit
  }) {
    axios.get('https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97')
      .then(res => {
        const fetchData = res.data.result.records
        commit('SET_DATA', fetchData)
      }).catch(err => {
        console.log(err)
      })
  },
  filterData ({
    commit
  }, keyWord) {
    let filterData = state.data
    let setFilterData = new Set(filterData)
    let tempZoneData = []
    let tempAllDayData = []
    let tempFreeData = []
    if (keyWord.allDay === false && keyWord.free === false && keyWord.zone === '' && keyWord.search === '') {
      commit('FILTER_DATA', filterData)
    }
    if (keyWord.zone !== '') {
      tempZoneData = filterData.filter(item => item.Zone === keyWord.zone)
      tempZoneData = new Set(tempZoneData)
      setFilterData = new Set(
        [...tempZoneData].filter(item => setFilterData.has(item))
      )
    }
    if (keyWord.allDay !== false) {
      tempAllDayData = filterData.filter(item => item.Opentime === '全天候開放')
      tempAllDayData = new Set(tempAllDayData)
      setFilterData = new Set(
        [...tempAllDayData].filter(item => setFilterData.has(item))
      )
    }
    if (keyWord.free !== false) {
      tempFreeData = filterData.filter(item => item.Ticketinfo === '免費參觀')
      tempFreeData = new Set(tempFreeData)
      setFilterData = new Set(
        [...tempFreeData].filter(item => setFilterData.has(item))
      )
    }
    filterData = [...setFilterData]
    if (keyWord.search !== '') {
      filterData = filterData.filter(item => {
        const objs = ['Name', 'Description']
        let target = false
        objs.forEach(obj => {
          if (item[obj].indexOf(keyWord.search) !== -1) {
            target = true
          }
        })
        return target
      })
    }
    commit('FILTER_DATA', filterData)
  },
  changeSearch ({
    commit
  }, keyWord) {
    commit('CHANGE_SEARCH', keyWord)
  },
  changeZone ({
    commit
  }, keyWord) {
    commit('CHANGE_ZONE', keyWord)
  },
  changeAllDay ({
    commit
  }, keyWord) {
    commit('CHANGE_ALL_DAY', keyWord)
  },
  changeFree ({
    commit
  }, keyWord) {
    commit('CHANGE_FREE', keyWord)
  }
}

const getters = {
  data (state) {
    if (state.used) {
      return state.filterData
    } else {
      return state.data
    }
  },
  zones (state) {
    return state.zones
  },
  search (state) {
    return state.search
  },
  zone (state) {
    return state.zone
  },
  allDay (state) {
    return state.allDay
  },
  free (state) {
    return state.free
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
