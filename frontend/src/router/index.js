import { createWebHistory, createRouter } from "vue-router";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Profile from "@/views/Profile.vue";
import AllPost from "@/views/AllPost.vue";
import AddPost from "@/views/AddPost.vue";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
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
    path: '/allpost',
    name: 'AllPost',
    component: AllPost,
  },
  {
    path: '/addpost',
    name: 'AddPost',
    component: AddPost,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;