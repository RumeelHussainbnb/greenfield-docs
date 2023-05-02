import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
     {
          text: "Guide",
          icon: "list",
          link: "/guide/introduction/overview",
     },
     {
          text: "API Reference",
          icon: "code",
          link: "/api-sdk/grpc-rest",
     },
     "/release-note/",
     {
          text: "FAQs",
          icon: "ask",
          link: "/faq/sp-faqs"
     }
]);
