<template>
  <h1>Basic</h1>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn size="x-small"
        v-bind = "formattedVariant !== 'default' ? { variant: formattedVariant } : {}"
        :ripple="cbxRipple">Extra small Button
      </v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn size="small" v-bind = "formattedVariant !== 'default' ? { variant: formattedVariant } : {}">Small Button</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn v-bind = "formattedVariant !== 'default' ? { variant: formattedVariant } : {}">Regular Button</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn size="large" v-bind = "formattedVariant !== 'default' ? { variant: formattedVariant } : {}">Large Button</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn size="x-large" v-bind = "formattedVariant !== 'default' ? { variant: formattedVariant } : {}">X-Large Button</v-btn>
      </v-col>
    </v-row>
  </v-container>

  <h1>Rounded</h1>
  <v-container class="text-center">
    <v-row justify="center">
      <v-col cols="12" md="4" sm="6">
        <v-btn rounded="0" size="x-large" block 
        v-bind = "formattedVariant !== 'default' ? { variant: formattedVariant } : {}">Rounded 0</v-btn>
      </v-col>

      <v-col cols="12" md="4" sm="6">
        <v-btn rounded="xs" size="x-large" block v-bind = "formattedVariant !== 'default' ? { variant: formattedVariant } : {}">Rounded xs</v-btn>
      </v-col>

      <v-col cols="12" md="4" sm="6">
        <v-btn rounded="sm" size="x-large" block v-bind = "formattedVariant !== 'default' ? { variant: formattedVariant } : {}">Rounded sm</v-btn>
      </v-col>

      <v-col cols="12" md="4" sm="6">
        <v-btn size="x-large" block v-bind = "formattedVariant !== 'default' ? { variant: formattedVariant } : {}">Button</v-btn>
      </v-col>

      <v-col cols="12" md="4" sm="6">
        <v-btn rounded="lg" size="x-large" block v-bind = "formattedVariant !== 'default' ? { variant: formattedVariant } : {}">Rounded lg</v-btn>
      </v-col>

      <v-col cols="12" md="4" sm="6">
        <v-btn rounded="xl" size="x-large" block v-bind = "formattedVariant !== 'default' ? { variant: formattedVariant } : {}">Rounded xl</v-btn>
      </v-col>
    </v-row>
  </v-container>

  <h1>Elevation</h1>
  <v-container>
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <v-btn size="x-large" v-bind = "formattedVariant !== 'default' ? { variant: formattedVariant } : {}">Default Elevation (2)</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn elevation="4" size="x-large" 
        v-bind = "formattedVariant !== 'default' ? { variant: formattedVariant } : {}"
        >Elevation 4</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn elevation="8" size="x-large" v-bind = "formattedVariant !== 'default' ? { variant: formattedVariant } : {}">Elevation 8</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn elevation="12" size="x-large" v-bind = "formattedVariant !== 'default' ? { variant: formattedVariant } : {}">Elevation 12</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn elevation="16" size="x-large" v-bind = "formattedVariant !== 'default' ? { variant: formattedVariant } : {}">Elevation 16</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn elevation="20" size="x-large" v-bind = "formattedVariant !== 'default' ? { variant: formattedVariant } : {}">Elevation 20</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn elevation="24" size="x-large" v-bind = "formattedVariant !== 'default' ? { variant: formattedVariant } : {}">Elevation 24</v-btn>
      </v-col>
    </v-row>
  </v-container>

</template>

<script setup>
// Import Pinia store
import { useButtonStyleStore } from '~/stores/buttonStyle';
import { computed } from 'vue';

// Access the global style from Pinia store
const buttonStyleStore = useButtonStyleStore();
const cbxRippleTest = true;

const getRipple = computed(() => {
  return buttonStyleStore.cbxRipple;
})

const formattedVariant = computed(() => {

   buttonStyleStore.btnStyle = buttonStyleStore.btnStyle.toLowerCase();
   return buttonStyleStore.btnStyle;
});

definePageMeta({
  layout: 'buttons_Old'
})
</script>

<style lang="scss" scoped></style>