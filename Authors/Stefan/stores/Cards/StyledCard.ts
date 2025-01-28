import { defineStore } from 'pinia'

export const useMyStyledCardStore = defineStore({
  id: 'myStyledCardStore',
  state: () => ({ 
    panelOpen:null,
    titleEnabled: false,
    title: "Card title",
    subtitleEnabled: false,
    subtitle: "Card subtitle",
    showActions: false,
    loading: false,
    variant: "elevated",
    color: "",
    elevation: '2',

    variants: ['elevated', 'text', 'flat', 'tonal', 'outlined', 'plain'],
  }),
  actions: {}
})
