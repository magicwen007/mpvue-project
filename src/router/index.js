module.exports = [
  {
    path: '/pages/index/index', // 页面路径，同时是 vue 文件相对于 src 的路径
    config: { // 页面配置，即 page.json 的内容
      navigationBarTitleText: '首页',
      enablePullDownRefresh: true,
    },
  },
  {
    path: '/pages/counter/index',
    config: {
      navigationBarTitleText: '查看启动日志',
      enablePullDownRefresh: true,
    },
  },
  {
    path: '/pages/logs/index',
    config: {
      navigationBarTitleText: '查看启动日志',
      enablePullDownRefresh: true,
    },
  },
];
