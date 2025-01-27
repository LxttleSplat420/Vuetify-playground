import { defineStore } from 'pinia'

export const useMySelectActivityStore = defineStore({
  id: 'mySelectActivityStore',
  state: () => ({ 
    panelOpen: null,
    readonly: false,
    disabled: false,

    
    items: ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'],
  }),
  actions: {}
})
