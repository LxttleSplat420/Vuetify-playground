<template>
  <v-app-bar color="indigo" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="useMyNavigationDrawerStore().drawer = !useMyNavigationDrawerStore().drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Vuetify Component Playground</v-toolbar-title>
        <v-spacer></v-spacer>
            
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

import { useMyNavigationDrawerStore } from '@/stores/layouts/navigationDrawer'

const theme = useTheme();

const isLightTheme = ref(theme.global.name.value === 'light');


watch(isLightTheme, (newValue: boolean) => {

	const themeName = newValue ? 'light' : 'dark';

	theme.global.name.value = themeName;
});

</script>

<style lang="scss" scoped></style>