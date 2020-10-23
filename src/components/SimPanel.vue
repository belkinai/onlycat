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
  background: #fff;
  color: #35393d;
  transition: all 0.1s ease-in-out;
}
.dark .sim-panel {
  background: #272a3b;
  color: #aac;
}
</style>
