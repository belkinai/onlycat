<template>
  <div class="page">
    <sim-modal v-model="$store.state.createTranslationModal">
      <create-translation/>
    </sim-modal>
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
  import SimSpacer from '@/components/SimSpacer.vue';
  import SimModal from '@/components/SimModal.vue';
  import Logo from '@/components/Logo.vue';
  import PanelFooter from '@/components/PanelFooter.vue';
  import CreateTranslation from '@/components/CreateTranslation.vue';

  export default {
    components: {SimPanel, SimContainer, SimSpacer, SimModal, Logo, PanelFooter, CreateTranslation},
    beforeCreate() {
      this.$store.commit('initializeTranslations');
    },
  }
</script>

<style>
  .page {
    display: flex;
    flex-direction: row;
    height: 100%;
    min-height: 100%;
    padding: 30px;
    background: #fff;
  }
</style>
