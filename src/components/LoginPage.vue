<template>
  <div class="card">
    <div class="flex flex-column md:flex-row">
      <div class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
        <div class="flex flex-wrap justify-content-center align-items-center gap-2">
          <label for="nomUtilisateur">Identifiant</label>
          <InputText id="nomUtilisateur" v-model="user.nomUtilisateur" type="text" />
        </div>
        <div class="flex flex-wrap justify-content-center align-items-center gap-2">
          <label for="password">Password</label>
          <InputText id="password" v-model="user.password" type="password"/>
        </div>
      </div>

    </div>
    <Button icon="pi pi-user" label="Login" @click="makeConnection()"/>

  </div>
</template>

<script>

import {defineComponent} from "vue";
import {useAuthStore} from "../store/auth.js";

export default defineComponent({

  data() {
    return {
      user: {
        nomUtilisateur: "",
        password: ""
      }
    }
  },

  /*mounted(){
    if(!localStorage.getItem("auth")) {
      localStorage.setItem("auth", "")
    }
  },*/

  methods: {
    async makeConnection() {
      const authStore = useAuthStore();
      await authStore.loginUser(this.user);
      await authStore.getUser();
      this.$router.push({path: "/"});
    }
  }
})
</script>
