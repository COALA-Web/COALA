import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import axios from "axios";
import "buefy/dist/buefy.css";
// require('@/assets/main.scss');

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// 사용할 아이콘 등록(camelCase로)
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

// cookie
import VueCookies from "vue-cookies";
Vue.use(VueCookies);
Vue.$cookies.config("1d"); // expire 1일 (global 설정)

library.add(
  faBell,
  faCircleUser,
  faCircleExclamation,
  faMedal,
  faRotate,
  faGear,
  faCircleQuestion,
  faCircleCheck,
  faCertificate
);
// library.add(faCircleUser);

Vue.prototype.$http = axios;
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Buefy, {
  defaultIconPack: "fas",
  defaultContainerElement: "#content"
  // ...
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
