<script setup>
import {onMounted, ref} from 'vue'
import {useAuthStore} from "../store/auth.js";

defineProps({
  value: String,
  username: Object,
})

const count = ref(0)

onMounted(() => {

})
</script>

<template>

  <p>Bienvenue sur le devoir réalisé par Nicolas RAYNAUD</p>
  <p>Un projet avec WebAPI en back et Vue.JS 3 en front-end avec la librairie PrimeVue :)</p>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
