// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  debug: false,
  ssr: true,

  vue: {  
    compilerOptions: {
      isCustomElement: (tag) => ['v-list-item-content'].includes(tag),
    },
  },

  modules: ['vuetify-nuxt-module', '@pinia/nuxt']
})