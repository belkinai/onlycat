<template>
  <div class="page">
    <sim-dialog v-model="createTranslationModal" modal>
      <create-translation/>
    </sim-dialog>
    <sim-dialog v-model="loginModal">
      <login/>
    </sim-dialog>
    <sim-panel>
      <logo/>
      <div v-if="user" class="sim-profile">
        <div class="sim-profile-avatar">
          <img v-if="user.photoURL" :src="user.photoURL" alt="avatar" class="sim-profile-avatar__img">
          <div v-else-if="user.displayName" class="sim-profile-avatar__noimg">{{ user.displayName.charAt(0) }}</div>
        </div>
        <div class="sim-profile-caption">
          <div class="sim-profile-caption__line">{{ user.displayName }}</div>
          <span class="sim-profile-caption__button" @click.stop="signOut">Выход</span>
        </div>
      </div>
      <div v-else class="sim-profile">
        <div class="sim-profile-avatar">
          <div class="sim-profile-avatar__noimg">?</div>
        </div>
        <div class="sim-profile-caption">
          <span class="sim-profile-caption__button" @click="loginModal = true">Войти</span>
        </div>
      </div>
      <sim-btn block lg @click="createTranslationModal = true">Новый перевод</sim-btn>
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
import CreateTranslationModal from '@/mixins/modals/createTranslationModal';
import Login from '@/components/Login';
import { auth } from 'firebase';

export default {
  components: {SimPanel, SimContainer, SimSpacer, SimDialog, SimBtn, Logo, PanelFooter, CreateTranslation, Login},
  mixins: [CreateTranslationModal],
  data() {
    return {
      loginModal: false,
    }
  },
  beforeCreate () {
    this.$store.commit('initializeTranslations');
    auth().onAuthStateChanged(user => {
      this.$store.commit('setUser', user);
    });
  },
  computed: {
    user: {
      get () {
        return this.$store.state.user;
      }
    }
  },
  methods: {
    signOut () {
      auth().signOut().then(() => {
            this.$store.commit('unsetStoreTranslations');
          })
          .catch(() => {console.log('Sign-Out Error')});
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
  .sim-profile-avatar__noimg {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    line-height: 60px;
    text-align: center;
    font-size: 40px;
    font-weight: 100;
    color: #a859ff;
  }
  .sim-profile-caption {
    flex-direction: column;
    flex-grow: 1;
    padding: 0 0 0 20px;
    justify-content: space-evenly;
  }
  .sim-profile-caption__line {
    margin-bottom: 5px;
  }
  .sim-profile-caption__button {
    color: #5116dd;
    border-bottom: 1px dashed #5116dd;
    cursor: pointer;
  }
  .sim-profile-caption__button:hover {
    opacity: 0.9;
  }
  .sim-profile-caption__button:active {
    opacity: 0.8;
  }
</style>
