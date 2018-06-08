<template>
  <div class="container">
    <div class="border-wrapper">
      <p style="text-align: center;">------------------tips------------------</p>
      <p>1.mpvue官方推荐，尽量使用vue原生的生命周期</p>
      <p>2.mpvue中，类似于小程序中app.js，onLaunch只有在App.vue中调用才生效</p>
      <p>
        3.mpvue中，所有页面的beforeCreate和created都会被优先执行，并且只会执行一次，
        因此各页面的初始化不能写在created中，可以写在onLoad中
      </p>
      <p>
        4.切出当前路由onUnload会执行，切进当前路由beforeUpdate,mounted,onLoad,onShow都会执行
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
    },
    methods: {},
    beforeCreate() {
      console.log('vue--beforeCreate执行');
    },
    created() {
      console.log('vue--created执行');
    },
    beforeMount() {
      console.log('vue--beforeMount执行');
    },
    mounted() {
      console.log('vue--mounted执行');
    },
    beforeUpdate() {
      console.log('vue--beforeUpdate执行');
    },
    updated() {
      console.log('vue--updated执行');
    },
    beforeDestroy() {
      console.log('vue--beforeDestroy执行');
    },
    destroyed() {
      console.log('vue--destroyed执行');
    },
    onLoad() {
      console.log('mini--onLoad执行');
    },
    onShow() {
      console.log('mini--onShow执行');
    },
    onReady() {
      console.log('mini--onReady执行');
    },
    onHide() {
      console.log('mini--onHide执行');
    },
    onUnload() {
      console.log('mini--onUnload执行');
    },
  };
</script>
<style lang="less" scoped>
</style>

