import { defineStore } from 'pinia'

export const useMyStefanComplexSwitchStore = defineStore({ //Change useMyAuthorTypeBaseComponentStore name
  id: 'myStefanComplexSwitchStore', //Change myAuthorTypeBaseComponentStore name
  state: () => ({ 
    panelOpen: null, //Used to open and close the selected Expansion Panel
    //Add other data variables/ arrays here
    switchOn: true,
    label: 'Label',
    inset: true,
    thumbColorBackgroundOn: "blue",
    thumbColorBackgroundOff: "black",
    thumbColorIconOn: "yellow",
    thumbColorIconOff: "white",    
    trackColorIconOn: "white",
    trackColorIconOff: "white",
    sliderColorOn: "green",
    sliderColorOff: "red",
    thumbIconOn: 'mdi-weather-sunny',
    thumbIconOff: 'mdi-weather-night',
    trackIconOn: "F0349",
    trackIconOff: "F0350",
    tooltipTitleIconAppended: 'mdi-dots-vertical',
    tooltipPosition: 'bottom',
    tooltipTitle: "Tooltip Title",
    tooltipText: "Tooltip Text",
    tooltipSubtitle: "Tooltip Subtitle",
    tooltipAlwaysShow: false,
    tooltipOpenDelay: "0",
    tooltipCloseDelay: "0",
    badgeShow: true,
    badgeColor: "green",
    badgeContent: "+9",
    badgeDot: true,
    badgeY: 10, 
    badgeX: 0,

    tooltipPositions: ['bottom', 'top', 'left', 'right'],

  }),
  actions: {
    //Add methods or functions here

  }
})
