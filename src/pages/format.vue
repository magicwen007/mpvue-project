<template>
  <div class="container">
    <div class="border-wrapper">
      <p style="text-align: center;">------------------tips------------------</p>
      <p>1.mpvue无法使用filter</p>
      <p>2.mpvue不支持复杂的js渲染表达式</p>
    </div>
    <div>
      <p>
        输入金额：<input style="display: inline-block;" type="text" v-model="money">
      </p>
      <p>
        格式化金额：{{formatMoney}}
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        money: 0,
      };
    },
    computed: {
      formatMoney() {
        return `¥${this.money.toString().replace(/(?=(?!^)(\d{3})+$)/g, ',')}`;
      },
    },
    methods: {},
  };
</script>
<style lang="less" scoped>
  input {
    display: inline-block;
    vertical-align: middle;
  }
</style>
