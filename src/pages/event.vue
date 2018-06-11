<template>
  <div class="container">
    <div class="border-wrapper">
      <p style="text-align: center;">------------------tips------------------</p>
      <p>
        在 input 和 textarea 中 change 事件会被转为 blur 事件。
      </p>
      <p>
        .stop 的使用会阻止冒泡，但是同时绑定了一个非冒泡事件，会导致该元素上的 catchEventName 失效！
      </p>
      <p>
        .prevent 可以直接干掉，因为小程序里没有什么默认事件，比如submit并不会跳转页面
      </p>
      <p>
        .capture 支持 1.0.9
      </p>
      <p>
        .self 没有可以判断的标识
      </p>
      <p>
        .once 也不能做
      </p>
    </div>
    <div class="border-wrapper">
      <p class="title">
        按钮事件，短按与长按
      </p>
      <div class="wrapper">
        <button
          @click="btnHandle(0)"
          @longpress="btnHandle(1)">
          按钮事件
        </button>
      </div>
    </div>
    <div class="border-wrapper">
      <p class="title">
        输入框事件，获取焦点、失去焦点、输入变化
      </p>
      <div class="wrapper">
        <input
          type="text"
          @focus="inputHandle(0)"
          @change="inputHandle(1)"
          @blur="inputHandle(2)">
      </div>
    </div>
    <div class="border-wrapper">
      <p class="title">
        移动端触摸事件
      </p>
      <div class="wrapper"
           @touchstart="mobileHandle(0)"
           @touchmove="mobileHandle(1)"
           @touchend="mobileHandle(2)"
           @touchcancel="mobileHandle(3)">
      </div>
    </div>
    <div class="border-wrapper">
      <p class="title">
        事件冒泡
      </p>
      <div class="wrapper" @click="catchHandle(0)">
        <button
          @click="catchHandle(1)">
          不阻止冒泡
        </button>
        <button
          @click.stop="catchHandle(2)">
          阻止冒泡
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {};
    },
    methods: {
      btnHandle(type) {
        if (type === 0) {
          console.log('按钮被单击了');
        } else {
          console.log('按钮被长按了');
        }
      },
      inputHandle(type) {
        if (type === 0) {
          console.log('获取焦点');
        } else if (type === 1) {
          console.log('内容变化');
        } else {
          console.log('失去焦点');
        }
      },
      mobileHandle(type) {
        if (type === 0) {
          console.log('触摸开始');
        } else if (type === 1) {
          console.log('触摸移动');
        } else if (type === 2) {
          console.log('触摸结束');
        } else {
          console.log('触摸取消');
        }
      },
      catchHandle(type, e) {
        if (type === 0) {
          console.log('父元素触发');
        } else if (type === 1) {
          console.log('子元素按钮--不阻止冒泡');
        } else {
          console.log('子元素按钮--阻止冒泡');
        }
      },
    },
  };
</script>
<style lang="less" scoped>
  .wrapper {
    width: 100%;
    margin-top: ~ "20rpx";
  }

  .border {
    border: 1px solid #999999;
  }
</style>
