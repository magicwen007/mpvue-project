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
  <div>
    <p>
      缓存数据：<input type="text" v-model="unchangedValue">
    </p>
    <p>
      未缓存数据：<input type="text" v-model="changedValue">
    </p>
  </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        changedValue: null,
        unchangedValue: null,
      };
    },
    methods: {},
    beforeCreate() {
      console.log('vue--beforeCreate执行', this);
    },
    created() {
      this.unchangedValue = null;
      console.log('vue--created执行', this);
    },
    beforeMount() {
      console.log('vue--beforeMount执行', this);
    },
    mounted() {
      console.log('vue--mounted执行', this);
    },
    beforeUpdate() {
      console.log('vue--beforeUpdate执行', this);
    },
    updated() {
      console.log('vue--updated执行', this);
    },
    beforeDestroy() {
      console.log('vue--beforeDestroy执行', this);
    },
    destroyed() {
      console.log('vue--destroyed执行', this);
    },
    onLoad() {
      this.changedValue = null;
      console.log('mini--onLoad执行', this);
    },
    onShow() {
      console.log('mini--onShow执行', this);
    },
    onReady() {
      console.log('mini--onReady执行', this);
    },
    onHide() {
      console.log('mini--onHide执行', this);
    },
    onUnload() {
      console.log('mini--onUnload执行', this);
    },
  };
</script>
<style lang="less" scoped>
</style>

