
import { defineStore } from 'pinia';

export const useButtonActivityStore = defineStore('buttonActivity', {
  state: () => ({
    active: "undefined",
    isdisabled: "undefined", 
    loading: "false",
    color: "undefined",
    ripple:"false",
    }),    
});
