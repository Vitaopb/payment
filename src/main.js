import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import cards from './plugins/cards'
import VueTheMask from "vue-the-mask";

Vue.config.productionTip = false
Vue.prototype.$cards = cards

Vue.use(VueTheMask);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
