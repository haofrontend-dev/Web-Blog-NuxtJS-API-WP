// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      title: "HaoN Blog",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  modules: ["@nuxtjs/tailwindcss"],

  runtimeConfig: {
    public: {
      wpApiUrl: process.env.WP_API_URL,
    },
  },
});
