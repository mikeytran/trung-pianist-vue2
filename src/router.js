import Vue from "vue";
import VueRouter from "vue-router";
import Bio from "./components/Bio.vue";
import Calendar from "./components/Calendar.vue";
import Cds from "./components/CDs.vue";
import Videos from "./components/Videos.vue";
import Gallery from "./components/GalleryCarousel.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/bio",
      component: Bio,
    },
    {
      path: "/calendar",
      component: Calendar,
    },
    {
      path: "/cds",
      component: Cds,
    },
    {
      path: "/videos",
      component: Videos,
    },
    {
      path: "/gallery",
      component: Gallery,
    },
  ],
});
