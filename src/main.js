import Vue from 'vue'
import App from './App.vue'
import vuetify from '../src/plugins/vuetify'
import vChat from './plugins/index.js'

Vue.config.productionTip = false

Vue.use(vChat)

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
