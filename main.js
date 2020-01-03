import Vue from 'vue'
import App from './App'
//弹框
import uniPop from './components/uni-popup/uni-popup.vue'
Vue.component('uni-pop', uniPop)


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
