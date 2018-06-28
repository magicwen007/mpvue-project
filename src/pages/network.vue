<template>
  <div class="container">
    <div class="border-wrapper">
      <p style="text-align: center;">------------------tips------------------</p>
      <p>1.可以使用小程序wx.request</p>
      <p>2.也可以使用fly.io，它基于promise，支持通用配置和拦截</p>
    </div>
    <div class="border-wrapper">
      <p>
        数据：{{apiData}}
      </p>
      <button @click="goRequest">请求数据</button>
    </div>
  </div>
</template>
<script>
  import request from '@/utils/request';

  export default {
    data() {
      return {
        apiData: null,
      };
    },
    methods: {
      async goRequest() {
        try {
          const data = await request.get('/topics');
          if (data.success) {
            this.apiData = data.data[0].author.loginname;
          }
        } catch (e) {
          console.log(e.status, e.message);
        }
      },
    },
  };
</script>
<style lang="less" scoped>
</style>
