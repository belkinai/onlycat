<template>
  <div class="page">
    <sim-dialog v-model="createTranslationModal" modal>
      <create-translation/>
    </sim-dialog>
    <sim-panel>
      <logo/>
      <span v-if="user">
      {{ user.displayName }}
      <span @click.stop="signOut">Sign Out</span>
        </span>
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
import SimPanel from '@/components/SimPanel.vue'
import SimContainer from '@/components/SimContainer.vue'
import SimSpacer from '@/components/SimSpacer.vue'
import SimDialog from '@/components/SimDialog.vue'
import SimBtn from '@/components/SimBtn.vue'
import Logo from '@/components/Logo.vue'
import PanelFooter from '@/components/PanelFooter.vue'
import CreateTranslation from '@/components/CreateTranslation.vue'
import CreateTranslationModal from '@/mixins/modals/createTranslationModal.js'
import firebase from 'firebase'

export default {
  components: {SimPanel, SimContainer, SimSpacer, SimDialog, SimBtn, Logo, PanelFooter, CreateTranslation},
  mixins: [CreateTranslationModal],
  beforeCreate() {
    this.$store.commit('initializeTranslations')
    firebase.auth().onAuthStateChanged(user => {
      this.$store.commit('setUser', user)
    });
  },
  computed: {
    user: {
      get() {
        return this.$store.state.user
      }
    }
  },
  methods: {
    signOut() {
      firebase.auth().signOut().then(() => {console.log('success')}).catch(() => {console.log('err')});
      this.$router.push('/')
    }
  }
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
