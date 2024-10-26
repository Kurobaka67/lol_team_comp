import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp } from 'vue'
import router from './router';
import AppWrapper from './AppWrapper.vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

library.add(faCheck);
library.add(faXmark);
library.add(faArrowDown);
library.add(faArrowUp);
library.add(faSun);
library.add(faMoon);

const app = createApp(AppWrapper);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount('#app')


