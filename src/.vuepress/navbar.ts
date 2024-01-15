import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "运维",
        icon: "pen-to-square",
        prefix: "devops/",
        children: [
          "insomnia-tips"
        ],
      },
      {
        text: "前端",
        icon: "pen-to-square",
        prefix: "frontEnd/",
        children: [
          "svg-loading-icon"
        ],
      },
      "other/win10-input-emoji",
      "resouce/FOSS-collection"
    ]
  },
  {
    text: "博客使用的主题",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
