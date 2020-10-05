<template>
  <div class="sim-panel">
    <slot/>
  </div>
</template>

<script>
</script>

<style>
  .sim-panel {
    display: flex;
    flex-direction: column;
    flex-basis: 300px;
    align-items: center;
    height: 100%;
    margin-right: 40px;
    padding: 40px 32px;
    border-radius: 24px;
    background: #e0e4ea;
    background: linear-gradient(-10deg, #2b469f 30%, #3352bb 100%);
    color: #333;
    box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2), -12px -12px 24px 0 rgba(255, 255, 255, 0.5);
  }
  .dark .sim-panel {
    background: #1a161c;
  }
</style>
