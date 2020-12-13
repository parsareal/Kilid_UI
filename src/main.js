import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'
import Vuex from 'vuex'
 
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: "",
    isAdmin: false
  },
  mutations: {
    setToken (state, newToken) {
      state.token = newToken
    }, 
    removeToken (state) {
      state.token = ""
    },
    setAdmin (state) {
      state.isAdmin = true
    },
    unsetAdmin (state) {
      state.isAdmin = false
    }
  }
})

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCDHrALNdR3lY_hdqTdnrr5eewpr07yU_U'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

