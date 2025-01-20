
import { defineStore } from 'pinia';

export const useButtonStyleStore = defineStore('buttonStyle', {
  state: () => ({
    btnStyle: 'default',  
    cbxRipple: false,
  }),
  actions: {
    setBtnStyle(newStyle) {
      this.btnStyle = newStyle;
    },
    setRipple(newvalue){
      this.cbxRipple = newvalue;
    }
  }
});
