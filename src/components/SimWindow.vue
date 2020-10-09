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
  height: 600px;
  max-height: 100%;
  padding: 0 40px;
  overflow: hidden;
  /*background: #f0f0f0;*/
  /*background: rgba(255, 255, 255, 0.05);*/
  border-radius: 20px;
  /*box-shadow: 0 10px 32px rgba(0, 0, 0, 0.37);*/
}
</style>
