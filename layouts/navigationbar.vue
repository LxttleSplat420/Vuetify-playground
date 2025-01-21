<template>
  <v-card>
    <v-layout>
      <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Vuetify Component Playground</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-switch
					class="pt-5 pr-3 "
					v-model="isLightTheme"
					color='primary'
					true-icon='mdi-weather-sunny'
					false-icon='mdi-weather-night'
					inset
			/>

        <client-only>
          <template v-if="$vuetify.display.mdAndUp">
            <v-btn icon="mdi-magnify" variant="text"></v-btn>
            <v-btn icon="mdi-filter" variant="text"></v-btn>
          </template>
        </client-only>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <client-only>
        <v-navigation-drawer
          v-model="drawer"
          :location="$vuetify.display.mobile ? 'bottom' : undefined"
          temporary
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
          <v-tabs v-model="tab" bg-color="primary" align-tabs="title">
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

const drawer = ref(false);
const selectedItem = ref("/buttons");
const tab = ref("individual");

const theme = useTheme();

const isLightTheme = ref(theme.global.name.value === 'light');

watch(isLightTheme, (newValue: boolean) => {

	const themeName = newValue ? 'light' : 'dark';

	theme.global.name.value = themeName;
});


const components = [
  { title: 'Buttons', link: '/buttons' },
  { title: 'Test', link: '/test' },
];

function selectItem(component: any) {
  selectedItem.value = component.link;
}

</script>
