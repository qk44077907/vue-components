import Vue from 'vue'
import App from './App.vue'
import ItcastUI from './components/index'
import './components/theme.less'
Vue.use(ItcastUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
