import AlbumList from "../src/components/AlbumList.vue";
import ArtistList from "../src/components/ArtistList.vue";
import HelloWorld from "../src/components/HelloWorld.vue";
import LoginPage from "../src/components/LoginPage.vue";
import RegisterPage from "../src/components/RegisterPage.vue";
import AlbumDetails from "../src/components/AlbumDetails.vue";
import ArtistDetails from "../src/components/ArtistDetails.vue";


const routes = [
    { path: '/', component: HelloWorld },
    { path: '/albums', component: AlbumList },
    { path: '/artists', component: ArtistList },
    { path: '/album/:id', name: "albumDetails", component: AlbumDetails },
    { path: '/artist/:id', name: "artistDetails", component: ArtistDetails },
    { path: '/login', component: LoginPage },
    {path: '/register', component: RegisterPage }
    //{ path: '/register', component: RegisterPage }
];
export default routes;
