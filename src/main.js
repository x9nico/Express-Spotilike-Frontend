import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import './style.css'
import App from './App.vue'
import PrimeVue from "primevue/config";
import 'primevue/resources/themes/lara-light-green/theme.css'
import Button from "primevue/button";
import 'primeicons/primeicons.css'
import InputText from "primevue/inputtext";
import 'virtual:uno.css'
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import AlbumList from "./components/AlbumList.vue";
import routes from "../route/route.js";
import Menubar from "primevue/menubar";
import Divider from "primevue/divider";
import {createPinia} from "pinia";
import Badge from "primevue/badge";
import Card from "primevue/card";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(PrimeVue);
app.use(VueRouter.createRouter({history: VueRouter.createWebHistory(), routes}));
app.component('Button', Button);
app.component('InputText', InputText);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Menubar', Menubar);
app.component('AlbumList', AlbumList);
app.component('Divider', Divider);
app.component('Badge', Badge);
app.component('Card', Card);
app.mount('#app');

