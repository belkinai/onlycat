<template>
  <div class="dark-mode-switch" @click="darkMode = !darkMode">
    <sim-icon :class="'lni-sun'"
              size="24px"
              :color="darkMode ? '#446' : '#daad65'"
              :glow="!darkMode"
    />
    <div class="dark-mode-switch__control">
      <div class="dark-mode-switch__handler" :class="{dark: darkMode}"></div>
    </div>
    <sim-icon :class="'lni-night'"
              size="20px"
              :color="darkMode ? '#5116dd' : '#aac'"
              :glow="darkMode"
    />
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
    width: 120px;
    padding-right: 8px;
    cursor: pointer;
  }
  .dark-mode-switch__control {
    position: relative;
    display: flex;
    align-items: center;
    width: 32px;
    height: 40px;
    margin: 0 12px;
    content: '';
  }
  .dark-mode-switch__handler {
    content: '';
    position: absolute;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #daad65;
    transition: all 0.1s ease-in-out;
  }
  .dark-mode-switch__handler.dark {
    left: 24px;
    background: #5116dd;
  }
</style>
