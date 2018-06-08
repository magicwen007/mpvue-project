module.exports = [
  {
    path: '/pages/index', // 页面路径，同时是 vue 文件相对于 src 的路径
    config: { // 页面配置，即 page.json 的内容
      navigationBarTitleText: '导航列表',
    },
  },
  {
    path: '/pages/circle-life',
    config: {
      navigationBarTitleText: '生命周期',
    },
  },
  {
    path: '/pages/format',
    config: {
      navigationBarTitleText: '数据格式转换',
    },
  },
];
