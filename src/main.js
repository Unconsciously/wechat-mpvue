import Vue from 'vue'
import App from '@/App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: [],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#c9c9c9',
      navigationBarTitleText: 'SCAN',
      navigationBarTextStyle: 'black'
    },
    "usingComponents": {
      "i-button": "/static/button/index"
    }
  }
}