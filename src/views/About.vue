<template>
  <div class="home">
    <div class="page-header">
      <h1>О проекте</h1>
    </div>
    <about-block/>
  </div>
</template>

<script>
  import AboutBlock from '@/components/AboutBlock.vue';
  export default {
    components: {AboutBlock},
  }
</script>

<style>
  .home {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100%;
    width: 1300px;
    max-width: 100%;
  }
</style>
