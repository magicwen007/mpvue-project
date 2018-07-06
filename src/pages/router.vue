<template>
  <div class="container">
    <div class="border-wrapper">
      <p style="text-align: center;">------------------tips------------------</p>
      <p>路由跳转可以使用小程序的相关路由api，不过更建议使用mpvue-router-patch，因为其更接近vue-router的用法。
      </p>
    </div>
    <div class="border-wrapper">
      <p class="title">
        路由信息
      </p>
      <div class="wrapper">
        <p>查询参数：{{routerObj.query}}</p>
        <p>路径：{{routerObj.path}}</p>
        <p>路由名称：{{routerObj.name}}</p>
      </div>
    </div>
    <div class="border-wrapper">
      <p class="title">
        跳转页面
      </p>
      <div class="wrapper">
        <button @click="goPage(0)">返回上一页</button>
        <button @click="goPage(1)">去组件</button>
        <button @click="goPage(2)">去组件并销毁当前页</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        routerObj: {},
      };
    },
    mounted() {
      this.routerObj = this.$route;
      this.routerObj.query = JSON.parse(this.$route.query.param);
    },
    methods: {
      goPage(type) {
        if (type === 0) {
          this.$router.go(-1);
        } else if (type === 1) {
          this.$router.push({
            path: '/pages/component',
          });
        } else {
          this.$router.replace({
            path: '/pages/component',
          });
        }
      },
    },
  };
</script>
<style lang="less" scoped>
</style>
