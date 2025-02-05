import { defineStore } from 'pinia'

export const useMyStefanPopoverMenuStore = defineStore({
  id: 'myStefanPopoverMenuStore',
  state: () => ({
    panelOpen: null,

    fav: true,
    menu: false,
    message: false,
    hints: true,
  }),
  actions: {}
})
