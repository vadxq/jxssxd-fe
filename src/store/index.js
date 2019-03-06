import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    alert: {
      msg: '',
      status: 0,
      sec: 0
    }
  },
  getters: {
    counts: (state) => {
      return state.count
    }
  },
  mutations: {
    changAlert: (state, e) => {
      state.alert = e
    }
  }
})

export default store
