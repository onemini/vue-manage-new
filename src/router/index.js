import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router";
// import { setTitle } from "../lib/util"

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

export default router;
