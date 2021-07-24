import { createWebHistory, createRouter } from "vue-router";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Profile from "@/views/Profile.vue";
import OnePost from "@/views/OnePost.vue";
import AddPost from "@/views/AddPost.vue";
import Administrateur from "@/views/Administrateur.vue";
import Home from "@/views/Home.vue";

const routes = [{
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
    },
    {
        path: "/inscription",
        name: "Signup",
        component: Signup,
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
    {
        path: '/onepost',
        name: 'OnePost',
        component: OnePost,
        props: true,
    },
    {
        path: '/addpost',
        name: 'AddPost',
        component: AddPost,
    },
    {
        path: '/administrateur',
        name: 'Administrateur',
        component: Administrateur,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;