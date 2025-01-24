import { defineStore } from 'pinia'

export const useComponentSearchButtonsStore = defineStore({
  id: 'myComponentSearchButtonsStore',
  state: () => ({ 
    searchQuery: "",

  }),
  actions: {}
})
