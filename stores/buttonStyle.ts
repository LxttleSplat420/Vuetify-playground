
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
    panelOpen: null,
    
  }),
  actions: {
    ResetWidth() {
      this.styled.width = "100"
    },
    ResetHeight (){
      this.styled.height = "36"
    },
    ChangeFlat(){
      if (this.styled.flat) {
        this.prevStyledElevation = this.styled.elevation
        this.styled.elevation = 0
      } else {
        this.styled.elevation = this.prevStyledElevation
      }
    },
    onClearStyled(){
      this.styled.color = 'black'
    },
    styledAutoWidth(){
      if (this.styled.AutoWidth) {
        this.styled.prevWidth = this.styled.width
        this.styled.width = 'auto'
      } else {
        this.styled.width = this.styled.prevWidth
      }
    },
    styledAutoHeight(){
      if (this.styled.AutoHeight) {
        this.styled.prevHeight = this.styled.height
        this.styled.height = 'auto'
      } else {
        this.styled.height = this.styled.prevHeight
      }
    },

  }
});
