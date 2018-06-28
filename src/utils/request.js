import Fly from 'flyio/dist/npm/wx';
import getMockData from './mock';

const request = new Fly();
const USE_LOCAL_MOCK = true;
// 配置请求基地址
request.config.baseURL = 'https://cnodejs.org/api/v1';

request.interceptors.request.use((req) => {
  wx.showNavigationBarLoading();
  if (USE_LOCAL_MOCK) {
    return getMockData(req.url);
  }
  return req;
});

request.interceptors.response.use(
  (response, promise) => {
    wx.hideNavigationBarLoading();
    return promise.resolve(response.data);
  },
  (err, promise) => {
    wx.hideNavigationBarLoading();
    wx.showToast({
      title: err.message,
      icon: 'none',
    });
    return promise.resolve();
  },
);

export default request;
