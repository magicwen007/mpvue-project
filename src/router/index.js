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
    path: '/pages/event',
    config: {
      navigationBarTitleText: '事件绑定',
    },
  },
  {
    path: '/pages/component',
    config: {
      navigationBarTitleText: '组件引用',
    },
  },
  {
    path: '/pages/router',
    config: {
      navigationBarTitleText: '路由信息',
    },
  },
  {
    path: '/pages/network',
    config: {
      navigationBarTitleText: '网络请求',
    },
  },
  {
    path: '/pages/vuex',
    config: {
      navigationBarTitleText: '数据管理',
    },
  },
  {
    path: '/pages/format',
    config: {
      navigationBarTitleText: '数据格式转换',
    },
  },
  {
    path: '/pages/style',
    config: {
      navigationBarTitleText: '样式绑定',
    },
  },
];
