<template>
  <Menubar :model="items">
    <template #start>
      <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-2rem">
        <path d="..." fill="var(--primary-color)" />
        <path d="..." fill="var(--text-color)" />
      </svg>
    </template>
    <template #item="{ item, props, hasSubmenu, root }">
      <a class="flex align-items-center" v-bind="props.action">
        <span :class="item.icon" />
        <span class="ml-2"><router-link :to="item.route">{{ item.label }}</router-link></span>
        <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
        <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
        <i v-if="hasSubmenu" :class="['pi pi-angle-down text-primary', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
      </a>
    </template>
    <template #end>
      <div v-if="!auth" class="flex align-items-center gap-2">
          <router-link to="/login"><Button icon="pi pi-user" label="Login" /></router-link>
          <router-link to="/register"><Button icon="pi pi-user" label="Register" /></router-link>
      </div>
      <div v-else>
        <p>Vous êtes connecté !</p>
      </div>
    </template>
  </Menubar>

</template>

<script>
import {defineComponent, ref} from "vue";
export default defineComponent({
  data(){
    return {
      auth: localStorage.getItem("auth"),
      items: ref([]),
    }
  },
  mounted(){
    this.items = ref([
      {
        label: 'Accueil',
        icon: 'pi pi-home',
        route: '/'
      },
      {
        label: ' Albums',
        icon: 'pi pi-home',
        route: '/albums'
      },
      {
        label: ' Artistes',
        icon: 'pi pi-star',
        route: '/artists'
      },
    ]);
  }
})
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>