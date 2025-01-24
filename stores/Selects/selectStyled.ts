import { defineStore } from 'pinia'

export const useMySelectStyledStore = defineStore({
  id: 'mySelectStyledStore',
  state: () => ({
    panelOpen: null,
    label: "Select",
    variant: 'filled',
    clearable: false,
    multiple: false,
    chips: false,

    variants: ['outlined', 'plain', 'underlined', 'filled', 'solo', 'solo-inverted', 'solo-filled'],
    items: ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'],
  }),
  actions: {}
})
