
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Swipe, SwipeItem } from 'mint-ui';
import VueScroller from 'vue-scroller'

Vue.use(VueScroller)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
