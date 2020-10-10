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
    transition: all .15s;
  }
  .logo:hover {
    transform: scale(1.1);
  }
  .logo:active {
    transform: scale(0.9);
  }
</style>
