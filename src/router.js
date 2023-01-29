import Vue from "vue";
import VueRouter from "vue-router";
import Bio from "./components/Bio.vue";
import Calendar from "./components/Calendar.vue";
import Cds from "./components/CDs.vue";

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
  ],
});
