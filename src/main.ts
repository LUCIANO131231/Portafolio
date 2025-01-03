import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/styles/Tailwind.css";
import router from "@/routes/index";
import FontAwesomeIcon from "@/plugins/Fontawesome";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");