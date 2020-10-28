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
    flex-basis: 1px;
    height: 100%;
    padding: 32px;
  }
  .sim-container.app-page {
    overflow: hidden;
  }
</style>
