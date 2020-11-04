<template>
  <sim-window>
    <sim-window-header>
      Вход
    </sim-window-header>
    <sim-window-body>
      <section id="firebaseui-auth-container"></section>
    </sim-window-body>
  </sim-window>
</template>

<script>
import SimWindow from '@/components/SimWindow.vue';
import SimWindowHeader from '@/components/SimWindowHeader.vue';
import SimWindowBody from '@/components/SimWindowBody.vue';
import * as firebaseui from "firebaseui";
import firebase from "firebase";
import 'firebaseui/dist/firebaseui.css'

export default {
  components: {SimWindow, SimWindowHeader, SimWindowBody},
  mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance()
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    var uiConfig = {
      signInFlow: 'popup',
      signInSuccessUrl: "/",
      tosUrl: '/terms',
      privacyPolicyUrl: '/policy',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
      ]
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  },
}

</script>

<style>
  .firebaseui-card-content {
    padding: 0;
  }
  .firebaseui-idp-button, .firebaseui-tenant-button {
    max-width: 100%;
  }
</style>
