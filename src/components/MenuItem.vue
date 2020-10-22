<template>
  <router-link :to="to" class="menu-item">
    <slot/>
  </router-link>
</template>

<script>
  export default {
    props: {
      to: Object,
    },
  }
</script>

<style>
  .menu-item {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    padding: 0 24px;
    height: 40px;
    border-radius: 4px;
    border: none;
    outline: none;
    background: #e0e4ea;
    text-transform: uppercase;
    transition: all .1s linear;
  }
  .menu-item:before {
    position: absolute;
    width: 100%;
    height: 100%;
    content: '';
    background: rgba(0, 0, 0, 0);
    transition: all .15s;
  }
  .menu-item:hover:before {
    background: rgba(0, 0, 0, 0.1);
  }
  .menu-item:active:before {
    background: rgba(0, 0, 0, 0.2);
  }
</style>
