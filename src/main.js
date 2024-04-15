import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

// Register Vue plugins
app.use(router);
app.use(store);

// Mount the app
app.mount("#app");
