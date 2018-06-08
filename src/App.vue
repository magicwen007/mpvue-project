<script>
  export default {
    beforeCreate() {
      console.log('app--vue--beforeCreate执行');
    },
    created() {
      console.log('app--vue--created执行');
    },
    onLaunch() {
      console.log('app--mini--onLaunch执行');
    },
    onShow() {
      console.log('app--mini--onShow执行');
    },
    onHide() {
      console.log('app--mini--onHide执行');
    },
  };
</script>

<style lang="less">
  .container {
    height: 100%;
    padding: ~ "20rpx";
    font-size: ~ "28rpx";
    box-sizing: border-box;
  }

  /* this rule will be remove */
  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
  }

  .border-wrapper {
    padding: ~ "20rpx";
    border: 1px dashed #999999;
  }

  p {
    padding-top: ~ "20rpx";
  }
</style>
