import { defineStore } from 'pinia'

export const useComponentSearchStore = defineStore({
  id: 'myComponentSearchStore',
  state: () => ({ 
    searchQuery: "",

  }),
  actions: {}
})
