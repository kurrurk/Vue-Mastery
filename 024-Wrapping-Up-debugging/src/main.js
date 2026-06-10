import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
const GStore = reactive({ flashMessage: "" });

const app = createApp(App);

app.use(router).provide("GStore", GStore);

app.mount("#app");
