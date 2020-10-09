<template>
  <div class="sim-container">
    <slot/>
  </div>
</template>

<style>
  .sim-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
    padding: 32px
  }
</style>
