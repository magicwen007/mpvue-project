import Vue from 'vue';
import App from '@/App';
import store from '@/store';
import MpvueRouterPatch from 'mpvue-router-patch';

Vue.use(MpvueRouterPatch);

Vue.config.productionTip = false;

const app = new Vue({
  store,
  ...App,
});
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
  },
};
