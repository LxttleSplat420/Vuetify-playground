import { defineStore } from 'pinia'

export const useMyStefanInteractveMenuStore = defineStore({ //Change useMyAuthorTypeBaseComponentStore name
  id: 'myStefanInteractveMenuStore', //Change myAuthorTypeBaseComponentStore name
  state: () => ({ 
    panelOpen: null, //Used to open and close the selected Expansion Panel
    //Add other data variables/ arrays here

    location: 'end',
    item: null,
    openDelay: 300,
    closeDelay: 250,
    openType: 'open-on-hover',
    closeType: 'close-on-content-click',
    xOffset: 0,
    yOffset: 0,

    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
    locations: [
      'top',
      'bottom',
      'start',
      'end',
      'center',
    ],
    openTypes: ['open-on-click', 'open-on-focus', 'open-on-hover'],
    closeTypes: ['close-on-content-click', 'close-on-back'],

    
    
  }),
  actions: {
    //Add methods or functions here

  }
})
