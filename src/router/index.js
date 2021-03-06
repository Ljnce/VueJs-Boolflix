import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Api from "../views/Api.vue";
import Film from "../views/Film.vue";
import Laravel from "../views/Laravel.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/api",
    name: "Api",
    component: Api
  },
  {
    path: "/film",
    name: "Film",
    component: Film
  },
  {
    path: "/laravel",
    name: "Laravel",
    component: Laravel
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
