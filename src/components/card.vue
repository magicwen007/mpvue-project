<template>
  <div>
    <p class="card">
      <slot></slot>
    </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
    },
  };
</script>

<style>
  .card {
    padding: 10px;
  }
</style>
