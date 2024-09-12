<script>

import {defineComponent} from "vue";

export default defineComponent(({

  data(){
    return {
      listAlbums: [],
      loading: true,
      selectedRow: null,
    }
  },
  methods: {
    goToAlbumDetails(e) {
      const id = this.$route.params.id;
      this.$router.push({ name: 'albumDetails', params: { id: e.data.id } });
    },
  },

  mounted(){
    fetch(`https://localhost:7170/api/Album`)
        .then(response => response.json())
        .then(data => {
          if (data && Array.isArray(data)) {
            this.listAlbums = data;
            this.loading = false;
          } else {
            console.error("Format de données invalide.");
          }
        })
        .catch(error => {
          console.error("Erreur lors de la récupération des données:", error);
        });
  }
}))
</script>

<template>
  <DataTable :value="listAlbums" :loading="loading" @row-click="goToAlbumDetails($event)" tableStyle="min-width: 50rem">
    <Column field="id" header="ID de l'album"></Column>
      <Column field="titre" header="Titre"></Column>
      <Column field="pochette" header="Pochette"></Column>
      <Column field="date_de_sortie" header="Date de sortie"></Column>
      <Column field="artisteId" header="Artiste"></Column>
  </DataTable>
</template>