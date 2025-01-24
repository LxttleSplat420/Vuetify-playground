<template>
  <v-app-bar color="indigo" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="useMyNavigationDrawerStore().drawer = !useMyNavigationDrawerStore().drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Vuetify Component Playground</v-toolbar-title>
        <v-spacer></v-spacer>
        
       
          <template v-if="$vuetify.display.mdAndUp">       
            
             <!-- Search Field -->
    <v-text-field v-if="isSearchVisible" v-model="useComponentSearchButtonsStore().searchQuery" label="Search Types" outlined
        clearable @blur="isSearchVisible = false" @click:clear="searchClear()" class="mt-7"
        ref="searchField"></v-text-field>

    <v-btn icon="mdi-magnify" variant="text" @click="toggleSearch"></v-btn>

            <v-btn icon="mdi-filter" variant="text"></v-btn>
          </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>

        <!-- Dark/ Light Mode Switch -->
        <v-switch
					class="pt-5 pr-3 "
					v-model="isLightTheme"
					color='primary'
					true-icon='mdi-weather-sunny'
					false-icon='mdi-weather-night'
					inset
			  />
      </v-app-bar>

   
</template>

<script lang="ts" setup>

import { ref, watch } from 'vue';

import { useComponentSearchButtonsStore } from '~/stores/Buttons/componentSearchButtons';
import { useMyNavigationDrawerStore } from '@/stores/layouts/navigationDrawer'

const isSearchVisible = ref(false); // Toggles the search field visibility

const searchField = ref<HTMLInputElement | null>(null);

// Toggle search field visibility
const toggleSearch = () => {
  isSearchVisible.value = !isSearchVisible.value;

  nextTick(() => {
          if (searchField.value !== null)
          {
          searchField.value.focus(); // Focus the search input when visible
          }
      });
};

const searchClear = () => {
  useComponentSearchButtonsStore().searchQuery = '';
};

const theme = useTheme();

const isLightTheme = ref(theme.global.name.value === 'light');


watch(isLightTheme, (newValue: boolean) => {

	const themeName = newValue ? 'light' : 'dark';

	theme.global.name.value = themeName;
});

</script>

<style lang="scss" scoped></style>