<template>
  <div class="page">
    <sim-dialog v-model="createTranslationModal" modal>
      <create-translation/>
    </sim-dialog>
    <sim-dialog v-model="loginModal">
      <login></login>
    </sim-dialog>
    <sim-panel>
      <logo/>
      <div v-if="user" class="sim-profile">
        <div class="sim-profile-avatar">
          <img v-if="user.photoURL" :src="user.photoURL" alt="avatar" class="sim-profile-avatar__img">
        </div>
        <div class="sim-profile-caption">
          <div>{{ user.displayName }}</div>
          <div @click.stop="signOut">Sign Out</div>
        </div>
      </div>
      <sim-btn block lg @click="createTranslationModal = true">Add</sim-btn>
      <sim-btn block lg @click="loginModal = true">Login</sim-btn>
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
import Login from '@/components/Login'
import firebase from 'firebase'

export default {
  components: {SimPanel, SimContainer, SimSpacer, SimDialog, SimBtn, Logo, PanelFooter, CreateTranslation, Login},
  mixins: [CreateTranslationModal],
  data() {
    return {
      loginModal: false,
    }
  },
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
      // this.$router.push('/')
    },
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
.sim-profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
}
.sim-profile-avatar {
  width: 70px;
  height: 70px;
  padding: 4px;
  border-radius: 50%;
  border: 1px solid #a859ff;
}
.sim-profile-avatar__img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.sim-profile-caption {
  flex-direction: column;
  flex-grow: 1;
  padding: 0 0 0 20px;
  justify-content: space-evenly;
}
</style>
