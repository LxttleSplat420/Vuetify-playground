import { defineStore } from 'pinia'

export const useComponentSearchStore = defineStore({
  id: 'useComponentSearchStoreStore',
  state: () => ({ 
    searchQuery: '',
  }),
  actions: {}
})
