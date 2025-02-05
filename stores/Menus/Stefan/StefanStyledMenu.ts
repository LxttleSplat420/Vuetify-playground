import { defineStore } from 'pinia'

export const useMyStefanStyledMenuStore = defineStore({
  id: 'myStefanStyledMenuStore',
  state: () => ({ 
    panelOpen: null,
    item: 'Select an item',
    itemIndex: null,
    iconClosed: "mdi-menu-down",
    iconOpen: "mdi-menu-up",
    menuOpen: false,
    
    items: [{ title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },],

  }),
  actions: {}
})
