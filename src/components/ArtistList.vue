<script>

import {defineComponent} from "vue";

export default defineComponent(({

  data(){
    return {
      listArtists: [],
      loading: true,
    }
  },

  methods: {
    goToArtistDetails(e) {
      this.$router.push({ name: 'artistDetails', params: { id: e.data.id } });
    },
  },

  mounted(){
    fetch(`https://localhost:7170/api/Artiste`)
        .then(response => response.json())
        .then(data => {
          if (data && Array.isArray(data)) {
            this.listArtists = data;
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
  <DataTable :value="listArtists" :loading="loading" @row-click="goToArtistDetails($event)" tableStyle="min-width: 50rem">
    <Column field="id" header="ID de l'artiste"></Column>
    <Column field="nom_artiste" header="Nom"></Column>
    <Column field="avatar_url" header="Avatar"></Column>
    <Column field="biographie" header="Biographie"></Column>
  </DataTable>
</template>