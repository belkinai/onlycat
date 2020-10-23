<template>
  <router-link :to="{name: 'Home'}" class="logo">
    SIMCAT
  </router-link>
</template>

<style>
  .logo {
    height: 48px;
    margin: 0 0 30px 0;
    line-height: 48px;
    font-size: 40px;
    font-weight: 100;
    color: #334;
    text-shadow: 3px 0 0 #a859ff;
    text-decoration: none;
    transition: all .10s;
  }
  .dark .logo {
    color: #9be;
  }
  .logo:hover {
    transform: translateX(-1px);
    text-shadow: 5px 0 0 #a859ff;
  }
  .logo:active {
    transform: translateX(4px);
    text-shadow: 0 0 0 #a859ff;
  }
</style>
