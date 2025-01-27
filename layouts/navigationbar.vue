<template>
  <v-card>
    <v-layout>     
      <v-app-bar color="indigo" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Vuetify Component Playground</v-toolbar-title>
        <v-spacer></v-spacer>
        
       
          <template v-if="$vuetify.display.mdAndUp">       
            
             <!-- Search Field -->
    <v-text-field v-if="isSearchVisible" v-model="useComponentSearchStore().searchQuery" label="Search Types" outlined
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

      <client-only>
        <v-navigation-drawer
          v-model="drawer"
          :location="$vuetify.display.mobile ? 'bottom' : undefined"
          temporary
          color="#ebebf3"
        >
          <v-list>
            <v-list-item
              v-for="component in components"
              :key="component.title"
              :to="`${component.link}/individual`"
              :class="{ 'v-list-item--active': selectedItem === component.link }"
              @click="selectItem(component)"
            >
              <v-list-item-content>
                <v-list-item-title>{{ component.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </client-only>

      <v-main>
        <v-card>
          <v-tabs 
          v-if="$route.path !== '/'"
          v-model="tab" bg-color="indigo" align-tabs="title">
            <v-tab :to="`${selectedItem}/individual`">Individual</v-tab>
            <v-tab :to="`${selectedItem}/shared`">Shared</v-tab>
          </v-tabs>

          <v-card-text>
            <v-tabs-window v-model="tab">
              <v-tabs-window-item value="individual">
                <NuxtPage />
              </v-tabs-window-item>
              <v-tabs-window-item value="shared">
                <NuxtPage />
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>
        </v-card>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

import { useComponentSearchStore } from '~/stores/layouts/useComponentSearchStore';

const drawer = ref(null);
const selectedItem = ref("/buttons");
const tab = ref("individual");

const components = [
  { title: 'Buttons', link: '/buttons' },  
  { title: 'Selects', link: '/selects' },
  { title: 'Test', link: '/test' },
];

function selectItem(component: any) {
  selectedItem.value = component.link;
};


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
  useComponentSearchStore().searchQuery = '';
};

const theme = useTheme();

const isLightTheme = ref(theme.global.name.value === 'light');


watch(isLightTheme, (newValue: boolean) => {

	const themeName = newValue ? 'light' : 'dark';

	theme.global.name.value = themeName;
});

</script>
