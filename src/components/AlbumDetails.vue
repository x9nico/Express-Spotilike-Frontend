<script>
import {defineComponent} from "vue";

export default defineComponent({
  data(){
    return {
      albumInfos: {},
      artistName: "",
    }
  },
  mounted() {
    fetch(`https://localhost:7170/api/Album/${this.$route.params.id}`)
        .then((e) => e.json())
        .then((e) => {
          this.albumInfos = e;
          fetch(`https://localhost:7170/api/Artiste/${this.albumInfos.id}`)
              .then((e) => e.json())
              .then((e) => {
                this.artistName = e.nom_artiste;
              })
        });
  }
})
</script>

<template>
  <router-link to="/albums"><Button label="Retour"></Button></router-link>
  <Card style="background-color: grey; color: white;">
    <template #title>Titre: {{ albumInfos.titre }}</template>
    <template #content>
      <p class="m-0">
        - Date de sortie: {{ albumInfos.date_de_sortie }}
      </p>
      <img :src="albumInfos.pochettte" alt="Image d'une pochette">
      <p>- Artiste:{{ artistName }}</p>
    </template>
  </Card>
</template>

<style scoped>

</style>