import { defineStore } from 'pinia'

export const useMyStefanComplexSwitchStore = defineStore({ //Change useMyAuthorTypeBaseComponentStore name
  id: 'myStefanComplexSwitchStore', //Change myAuthorTypeBaseComponentStore name
  state: () => ({ 
    panelOpen: null, //Used to open and close the selected Expansion Panel
    //Add other data variables/ arrays here
    label: 'Label',
    inset: true,
    color: "primary",
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
    badgeShow: true,
    badgeColor: "green",
    badgeContent: "+9",
    badgeDot: false,

    tooltipPositions: ['bottom', 'top', 'left', 'right'],

  }),
  actions: {
    //Add methods or functions here

  }
})
