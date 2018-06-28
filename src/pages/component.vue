<template>
  <div class="container">
    <div class="border-wrapper">
      <p style="text-align: center;">------------------tips------------------</p>
      <p>暂不支持在组件引用时，在组件上定义 click 等原生事件、v-show（可用 v-if 代替）和 class style 等样式属性，因为编译到 wxml，小程序不会生成节点，建议写在内部顶级元素上。
      </p>
      <p>Slot（scoped 暂时还没做支持）
      </p>
    </div>
    <div>
      <div class="border-wrapper">
        <p class="title">
          插槽
        </p>
        <div class="wrapper">
          <card>
            普通插槽可以渲染
            <inner-text :content="innerText">
            </inner-text>
          </card>
          <card>
            v-for(scope)插槽无法渲染
            <div v-for="content in innerTextArray" :key="index">
              <inner-text :content="content">
              </inner-text>
            </div>
          </card>
        </div>
      </div>
      <div class="border-wrapper">
        <p class="title">
          改变组件属性
        </p>
        <div class="wrapper" v-show="isWrapperShow">
          <inner-text :content="innerText" v-show="isCardShow">
          </inner-text>
        </div>
        <div class="wrapper">
          <button @click="change(0)">直接作用在组件</button>
          <button @click="change(1)">作用在组件父级</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Card from '@/components/card';
  import InnerText from '@/components/text';

  export default {
    data() {
      return {
        innerTextArray: ['slot1', 'slot2', 'slot3'],
        innerText: 'slot',
        isCardShow: true,
        isWrapperShow: true,
      };
    },
    computed: {},
    methods: {
      change(type) {
        if (type === 0) {
          this.isCardShow = !this.isCardShow;
        } else {
          this.isWrapperShow = !this.isWrapperShow;
        }
      },
    },
    components: {
      Card,
      InnerText,
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
