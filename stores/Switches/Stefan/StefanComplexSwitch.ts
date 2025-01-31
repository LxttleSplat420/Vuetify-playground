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
    sliderColorOn: "green",
    sliderColorOff: "red",
    iconOn: 'mdi-weather-sunny',
    iconOff: 'mdi-weather-night',
    iconInsetOn: 'mdi-magnify',
    tooltipPosition: 'bottom',
    tooltipTitle: "Tooltip Title",
    tooltipText: "Tooltip Text",
    tooltipSubtitle: "Tooltip Subtitle",
    tooltipAlwaysShow: false,
    tooltipOpenDelay: "0",
    tooltipCloseDelay: "0",
    tooltipTitleIcon: 'mdi-dots-vertical',
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
