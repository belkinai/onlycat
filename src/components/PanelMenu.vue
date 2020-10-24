<template>
  <div class="panel-menu">
    <slot/>
  </div>
</template>

<style>
  .panel-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 32px 0 0 0;
  }
</style>
