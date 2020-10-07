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
  margin-right: 40px;
  padding: 40px 32px;
  border-radius: 24px;
  background: #e0e4ea;
  background: linear-gradient(-30deg, #311a99 20%, #4a39bb 80%, #5543f0 100%);
  color: #333;
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.37);
}
.dark .sim-panel {
  background: #1a161c;
}
</style>
