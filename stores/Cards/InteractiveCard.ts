import { defineStore } from 'pinia'

export const useMyInteractiveCardStore = defineStore({
  id: 'myInteractiveCardStore',
  state: () => ({ 
    panleOpen: null,
    hover: true,
    hrefEnable: true,
    href: "https://github.com/LxttleSplat420/Vuetify-playground/",
    reveal: false,
    revealEnabled: false,
  }),
  actions: {}
})
