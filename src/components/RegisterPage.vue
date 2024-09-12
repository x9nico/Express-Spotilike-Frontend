<template>
  <div class="card">
    <div class="flex flex-column md:flex-row">
      <div class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3 py-5">
        <div class="flex flex-wrap justify-content-center align-items-center gap-2">
          <label for="nomUtilisateur">Username</label>
          <InputText id="nomUtilisateur" v-model="user.nomUtilisateur" type="text" />
        </div>
        <div class="flex flex-wrap justify-content-center align-items-center gap-2">
          <label for="email">Email</label>
          <InputText id="email" v-model="user.email" type="text" />
        </div>
        <div class="flex flex-wrap justify-content-center align-items-center gap-2">
          <label for="password">Password</label>
          <InputText id="password" v-model="user.password" type="password"/>
        </div>
      </div>

    </div>
    <Button icon="pi pi-user" label="Register" @click="makeConnection()"/>
    <Toast/>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import {useAuthStore} from "../store/auth.js";
import {useToast} from "primevue/usetoast";

export default defineComponent({

  data() {
    return {
      user: {
        nomUtilisateur: "",
        email: "",
        password: ""
      }
    }
  },

  methods: {
    async makeConnection() {
      const authStore = useAuthStore();
      await authStore.registerUser(this.user);
      this.$router.push({path: "/login"});
    }
  }
})
</script>
