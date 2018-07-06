<template>
  <div class="container">
    <div class="border-wrapper">
      <p style="text-align: center;">------------------tips------------------</p>
      <p>不支持Class与Style绑定中的classObject和styleObject语法。
      </p>
    </div>
    <div>
      <p>
        <button @click="changeColor">变换背景颜色</button>
      </p>
      <div class="wrapper" :class="{'active':isChanged}"></div>
      <div class="wrapper" :class="activeCss"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isChanged: false,
      };
    },
    computed: {
      activeCss() {
        return this.isChanged ? 'active' : '';
      },
    },
    methods: {
      changeColor() {
        this.isChanged = !this.isChanged;
      },
    },
  };
</script>
<style lang="less" scoped>
  .wrapper {
    width: 100%;
    height: ~ "100rpx";
    margin-top: ~ "20rpx";
    border: 1px solid #999999;
    &.active {
      background: #FD6F1B;
    }
  }
</style>
