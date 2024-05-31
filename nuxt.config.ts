// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/fonts"],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  typescript: { strict: false },
});