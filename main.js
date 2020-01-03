import Vue from 'vue'
import App from './App'
import cmdNavBar from "@/components/cmd-nav-bar/cmd-nav-bar.vue"
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
