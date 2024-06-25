import { createApp } from "vue";
import { Quasar } from "quasar";
import { createPinia } from "pinia";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import App from "./App.vue";
import router from "../router";

const pinia = createPinia();
const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {},
});

myApp.use(router);
myApp.use(pinia);

myApp.mount("#app");
