import { defineStore } from 'pinia'

export const useMyStefanBasicBadgeStore = defineStore({ //Change useMyAuthorTypeBaseComponentStore name
  id: 'myStefanBasicBadgeStore', //Change myAuthorTypeBaseComponentStore name
  state: () => ({ 
    panelOpen: null, //Used to open and close the selected Expansion Panel
    dot: false,
    badgeShow: true,
    badgeColor: 'primary',
    badgeY: '0',
    badgeX: '0',
    content: '+9',
    location: 'top end',
    inline: false,
    floating: false,

    //Add other data variables/ arrays here
    locations: ['top end', 'top center', 'top start', 'bottom end', 'bottom center', 'bottom start', "center"],
    
  }),
  actions: {
    //Add methods or functions here

  }
})
