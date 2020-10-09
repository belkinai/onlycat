<template>
  <div class="sim-panel">
    <slot/>
  </div>
</template>

<style>
.sim-panel {
  display: flex;
  flex-direction: column;
  flex-basis: 300px;
  align-items: center;
  height: 100%;
  padding: 40px 32px;
  background: #e0e4ea;
  background: #fff;
  /*background: linear-gradient(-30deg, #311a99 20%, #4a39bb 80%, #5543f0 100%);*/
  color: #333;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.27);
}
.dark .sim-panel {
  background: #1a161c;
}
</style>
