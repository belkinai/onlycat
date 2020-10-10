<template>
  <div class="page">
    <sim-dialog v-model="createTranslationModal" modal>
      <create-translation/>
    </sim-dialog>
    <sim-panel>
      <logo/>
      <sim-btn block lg @click="createTranslationModal = true">Add</sim-btn>
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
import SimDialog from '@/components/SimDialog.vue';
import SimBtn from '@/components/SimBtn.vue';
import Logo from '@/components/Logo.vue';
import PanelFooter from '@/components/PanelFooter.vue';
import CreateTranslation from '@/components/CreateTranslation.vue';
import CreateTranslationModal from '@/mixins/modals/createTranslationModal.js';

export default {
  components: {SimPanel, SimContainer, SimSpacer, SimDialog, SimBtn, Logo, PanelFooter, CreateTranslation},
  mixins: [CreateTranslationModal],
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
  background-color: #f5f9fd;
}
</style>
