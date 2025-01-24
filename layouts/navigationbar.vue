<template>
  <v-card>
    <v-layout>      
      <client-only>
        <v-navigation-drawer
          v-model="useMyNavigationDrawerStore().drawer"
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
          <v-tabs v-model="tab" bg-color="indigo" align-tabs="title">
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
import { ref } from 'vue';

import {useMyNavigationDrawerStore} from '@/stores/layouts/navigationDrawer'

const selectedItem = ref("/buttons");
const tab = ref("individual");

const components = [
  { title: 'Buttons', link: '/buttons' },  
  { title: 'Selects', link: '/selects' },
  { title: 'Testing', link: '/test' },
];

function selectItem(component: any) {
  selectedItem.value = component.link;
};


</script>
