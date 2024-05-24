import { createApp } from "vue";
import { createPinia } from "pinia";

import "vue-highlight-code/dist/style.css";
// @ts-ignore
import { HighCode } from "vue-highlight-code";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiSunFill,
  BiMoonStarsFill,
  MdMenuRound,
  CoX,
  FaFacebookF,
  BiWhatsapp,
  BiGithub,
  CoLeetcode,
  CoLinkedinIn,
  CoMailRu,
  FaGraduationCap,
  BiAwardFill,
  RiToolsFill,
  BiPhone,
} from "oh-vue-icons/icons";

import "./style.css";
import App from "./App.vue";

addIcons(
  BiSunFill,
  BiMoonStarsFill,
  MdMenuRound,
  CoX,
  FaFacebookF,
  BiWhatsapp,
  BiGithub,
  CoLeetcode,
  CoLinkedinIn,
  CoMailRu,
  FaGraduationCap,
  BiAwardFill,
  RiToolsFill,
  BiPhone
);

const app = createApp(App);
const pinia = createPinia();

app.component("HCode", HighCode);
app.component("v-icon", OhVueIcon);
app.use(pinia);
app.mount("#app");
