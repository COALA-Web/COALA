import { createApp } from "vue"; // vue 프로젝트에서 필수적으로 필요한 부분, 템플릿 리터럴 문법
import App from "./App.vue"; // src/App.vue 파일을 App이라는 이름으로 import 해오겠다.
import router from "./router"; // src/router/index.js를 router라는 이름으로 import해오겠다.(파일명 생략 시 index.js 의미)
import store from "./store";

// App 만들고, store와 router 사용, 만든 app.vue를 가져와서 아이디가 app인 요소에 마운트시킨다.
// public/index.html에 있는 div id="app"
// 이렇게 마운트 -> 페이지 소스보기로 해도 소스를 감출 수 있다는 장점이 있음.
createApp(App).use(store).use(router).mount("#app");
