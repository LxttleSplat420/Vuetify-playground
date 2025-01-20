
import { defineStore } from 'pinia';

export const useButtonStyleStore = defineStore('buttonStyle', {
  state: () => ({
    styled: {
      name: 'Styled',
      variant: 'outlined',
      start: null,
      end: null,
      elevation: 2,
      rounded: "0",
      color: "black",
      flat: false,
      height: "36",
      width: "100",
      AutoWidth: false,
      AutoHeight: false,
      prevHeight: "36",
      prevWidth: "100",
    },
    variants: ['text', 'flat', 'tonal', 'outlined', 'plain'],
    rounding: ['0', 'xs', 'sm', 'true', 'lg', 'xl', 'pill', 'circle', 'shaped'],
    prevStyledElevation: 0,
    
  }),
});
