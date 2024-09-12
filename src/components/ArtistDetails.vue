<script>
import {defineComponent} from "vue";

export default defineComponent({
  data(){
    return {
      artistInfos: {},
    }
  },

  mounted() {
    fetch(`https://localhost:7170/api/Artiste/${this.$route.params.id}`)
        .then((e) => e.json())
        .then((e) => {
          this.artistInfos = e;
        })
  }
})
</script>

<template>
  <router-link to="/artists"><Button label="Retour"></Button></router-link>
  <Card style="background-color: grey; color: white;">
    <template #title>Titre: {{ artistInfos.titre }}</template>
    <template #content>
      <p class="m-0">
        - Nom de l'artiste: {{ artistInfos.nom_artiste }}
      </p>
      <p>Image:</p>
      <img :src="artistInfos.avatar_url" alt="Image d'un artiste">
      <p>Biographie: {{ artistInfos.biographie }}</p>
    </template>
  </Card>
</template>

<style scoped>

</style>