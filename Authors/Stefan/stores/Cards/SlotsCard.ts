import { defineStore } from 'pinia'

export const useMySlotsCardStore = defineStore({
  id: 'mySlotsCardStore',
  state: () => ({ 
    panelOpen: null,
    prependEnable: true,
    appendEnable: true,
    appendItem: "Avatar",
    prependItem: "mdi-alarm",

    items: ["mdi-alarm", "Styled Button", "Styled Card", "Avatar"],
    
  }),
  actions: {}
})
