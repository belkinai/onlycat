<template>
  <div class="sim-window" @click.stop>
    <slot/>
  </div>
</template>

<style>
.sim-window {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 980px;
  max-width: 100%;
  max-height: 100%;
  padding: 20px 80px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
}
</style>
