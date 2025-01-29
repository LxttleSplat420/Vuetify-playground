import { defineStore } from 'pinia'

export const useMyTestStore = defineStore({
  id: 'myTestStore',
  state: () => ({ 
    panelOpen: null, //Used to open and close the selected Expantion Panel
    //Add other data variables/ arrays here
    
  }),
  actions: {
    //Add methods/ functions here

  }
})
