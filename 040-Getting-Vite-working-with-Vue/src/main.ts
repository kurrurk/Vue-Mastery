import App from "./App.vue";
import("./async.js").then((mod) => {
  console.log(mod);
});

import { createApp } from "vue";

createApp(App).mount("#app");
