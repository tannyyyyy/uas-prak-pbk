import { createRouter, createWebHistory } from "vue-router";
import Tugas1 from "../src/components/Tugas1.vue";
import Tugas2 from "../src/components/Tugas2.vue";
import Tugas3 from "../src/components/Tugas3.vue";
import Tugas4 from "../src/components/Tugas4.vue";
import Tugas5 from "../src/components/Tugas5.vue";
import Tugas6 from "../src/components/Tugas6.vue";
import Tugas7 from "../src/components/Tugas7.vue";

import Weather from "../src/components/Weather.vue";

const routes = [
  { path: "/tugas1", component: Tugas1 },
  { path: "/tugas2", component: Tugas2 },
  { path: "/tugas3", component: Tugas3 },
  { path: "/tugas4", component: Tugas4 },
  { path: "/tugas5", component: Tugas5 },
  { path: "/tugas6", component: Tugas6 },
  { path: "/tugas7", component: Tugas7 },

  { path: "/", component: Weather },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
