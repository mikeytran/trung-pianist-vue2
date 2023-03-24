import Vue from "vue";
import VueRouter from "vue-router";
import Bio from "./components/Bio.vue";
import Calendar from "./components/Calendar.vue";
// import Cds from "./components/CDs.vue";
import Spotify from "./components/Spotify.vue";
import Videos from "./components/Videos.vue";
import Gallery from "./components/GalleryCarousel.vue";
import SocialMedia from "./components/SocialMedia.vue";

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
      path: "/discography",
      component: Spotify,
    },
    {
      path: "/videos",
      component: Videos,
    },
    {
      path: "/gallery",
      component: Gallery,
    },
    {
      path: "/contact",
      component: SocialMedia,
    },
  ],
});
