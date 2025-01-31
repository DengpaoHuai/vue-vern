import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/router";
import { createPinia } from "pinia";

const app = createApp(App);

app.use(router);

const store = createPinia();
app.use(store);

app.mount("#app");
