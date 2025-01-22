import { defineStore } from 'pinia'

export const useButtonInteractiveStore = defineStore({
  id: 'myButtonInteractiveStore',
  state: () => ({ 
    panelOpen: null,
    showType: 'open-on-hover',
    onClick: false,
    onFocus: false,    
    onHover: true,
    location: 'end',


    showTypes: ['open-on-click','open-on-focus', 'open-on-hover'],
    locations: ['start', 'end', 'top', 'bottom'],
  }),
  actions: {

    updateShowType(){
      if (this.showType === "open-on-click") {
        this.onClick = true
        this.onFocus = false
        this.onHover = false
      } else if (this.showType === "open-on-focus") {
        this.onClick = false
        this.onFocus = true
        this.onHover = false
      } else if (this.showType === "open-on-hover") {
        this.onClick = false
        this.onFocus = false
        this.onHover = true
      }
    }

  }
})
