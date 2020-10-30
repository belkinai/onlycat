<template>
  <div class="sim-panel">
    <slot/>
  </div>
</template>

<style>
.sim-panel {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  flex-basis: 300px;
  min-width: 300px;
  align-items: center;
  align-self: stretch;
  height: 100%;
  min-height: 100%;
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
