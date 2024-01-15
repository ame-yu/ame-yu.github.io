import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: `KyleZhou个人博客`,
  description: "Resource & Ideas & Tinker Log",
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
