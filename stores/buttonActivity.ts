
import { defineStore } from 'pinia';
import { Ripple } from 'vuetify/directives';

export const useButtonActivityStore = defineStore('buttonActivity', {
  state: () => ({
    panelOpen: null,
    active: false,
    disabled: false,
    loading: "false",
    isLoading: false,
    prevLoading: "primary",
    ripple: "true",
    isRipple: true,
    prevRipple: "true",
    }),    
    actions: {
    clearLoadingColor(){
      this.loading = "primary";
    },
    enableLoading(){
      if (this.isLoading){
      this.loading = this.prevLoading;
      } else
      {
        this.prevLoading = this.loading;
        this.loading = "false";
      }
    },
    enableRipple(){
      if (this.isRipple){
      this.ripple = this.prevRipple;
      } else
      {
        this.prevRipple = this.ripple;
        this.ripple = "true";
      }
    },
    clearRippleColor(){
      this.ripple = "true";
    },
    

  }
});
