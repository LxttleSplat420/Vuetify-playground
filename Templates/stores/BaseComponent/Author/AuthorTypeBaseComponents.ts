import { defineStore } from 'pinia'

export const useMyAuthorTypeBaseComponentStore = defineStore({ //Change useMyAuthorTypeBaseComponentStore name
  id: 'myAuthorTypeBaseComponentStore', //Change myAuthorTypeBaseComponentStore name
  state: () => ({ 
    panelOpen: null, //Used to open and close the selected Expansion Panel
    //Add other data variables/ arrays here
    
  }),
  actions: {
    //Add methods or functions here

  }
})
