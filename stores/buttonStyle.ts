
import { defineStore } from 'pinia';

export const useButtonStyleStore = defineStore('buttonStyle', {
  state: () => ({
    btnStyle: 'default',  
    cbxRipple: false,
  }),
  actions: {
    console.log("test");
  }
});
