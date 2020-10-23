<template>
  <div class="dark-mode-switch">
    <sim-icon :class="'lni-sun'" size="24px" :color="darkMode ? '#446' : '#daad65'"/>
    <div class="dark-mode-switch__control" @click="darkMode = !darkMode">
      <div class="dark-mode-switch__handler"></div>
    </div>
    <sim-icon :class="'lni-night'" size="20px" :color="darkMode ? '#5116dd' : '#aac'" :glow="darkMode"/>
  </div>
</template>

<script>
  import SimIcon from '@/components/SimIcon.vue';
  import DarkMode from '@/mixins/darkMode';
  export default {
    components: {SimIcon},
    mixins: [DarkMode],
  }
</script>

<style>
  .dark-mode-switch {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .dark-mode-switch__control {
    display: flex;
    align-items: center;
    width: 84px;
    height: 40px;
    margin: 0 32px;
    content: '';
  }
  .dark-mode-switch__handler {
    content: '';
    width: 16px;
    height: 16px;
    background: #a859ff;
  }
</style>
