import Vue from 'vue'
import App from './App.vue'
import firebaseMessaging from './firebase'

Vue.prototype.$messaging = firebaseMessaging

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
