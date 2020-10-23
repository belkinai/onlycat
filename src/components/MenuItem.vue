<template>
  <router-link :to="to" class="menu-item" active-class="active">
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
    height: 48px;
    /*border-radius: 4px;*/
    border: none;
    outline: none;
    color: #446;
    font-size: 14px;
    text-transform: capitalize;
    text-decoration: none;
    transition: all .1s linear;
  }
  .dark .menu-item {
    color: #aac;
  }
  .menu-item:before {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    background: rgba(0, 0, 0, 0);
    transition: all .15s;
  }
  .menu-item.active {
    color: #5116dd;
  }
  .menu-item.active:before {
    background: rgba(15, 45, 110, 0.15);
  }
  .menu-item:hover:before {
    background: rgba(15, 45, 110, 0.10);
  }
  .menu-item:active:before {
    background: rgba(15, 45, 110, 0.2);
  }
  .menu-item .lni {
    margin: -2px 12px 0 0;
  }
</style>
