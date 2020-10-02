<template>
  <div class="page">
    <sim-panel>
      <logo/>
      <sim-spacer/>
      <panel-footer/>
    </sim-panel>
    <sim-container>
      <router-view/>
    </sim-container>
  </div>
</template>

<script>
  import SimPanel from '@/components/SimPanel.vue';
  import SimContainer from '@/components/SimContainer.vue';
  import Logo from '@/components/Logo.vue';
  import SimSpacer from '@/components/SimSpacer.vue';
  import PanelFooter from '@/components/PanelFooter.vue';
  export default {
    components: {SimPanel, SimContainer, SimSpacer, Logo, PanelFooter},
  }
</script>

<style>
  .page {
    display: flex;
    flex-direction: row;
    height: 100%;
    min-height: 100%;
    padding: 30px;
    background: #e0e4ea;
  }
</style>
