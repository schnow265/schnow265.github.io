// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },

  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/fonts", "shadcn-nuxt"],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  typescript: { strict: false },
  compatibilityDate: "2024-07-19",
});
