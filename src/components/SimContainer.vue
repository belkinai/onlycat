<template>
  <div class="sim-container">
    <slot/>
  </div>
</template>

<style>
  .sim-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-grow: 1;
  }
</style>
