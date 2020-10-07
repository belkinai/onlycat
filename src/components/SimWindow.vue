<template>
  <div class="sim-window">
    <slot/>
  </div>
</template>

<style>
.sim-window {
  position: relative;
  width: 900px;
  max-width: 100%;
  height: 800px;
  max-height: 100%;
  overflow: hidden;
  background: #f0f0f0;
  border-radius: 20px;
  box-shadow: 0 10px 32px rgba(0, 0, 0, 0.37);
}
</style>
