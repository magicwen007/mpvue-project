<template>
  <div>
    {{content}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slotContent: this.content,
      };
    },
    mounted() {
      console.log(this.slotContent);
    },
    methods: {},
    props: ['content'],
  };
</script>

<style>
</style>
