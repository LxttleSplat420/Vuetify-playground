<template>

  <v-card elevation="5" v-if="matchesSearch(cards[cardId])" color="#e9eaf5">
    <v-container fluid fill-height>
      <v-row justify="center">

        <!-- Author and Co-Author Labels -->
        <v-col cols="auto">
          <v-container class="d-flex flex-column" style="height: 100%; position: relative;" min-height="150">
            <!-- Import/ Export Buttons -->
            <div>
              <v-row :style="{ color: '#656cbe', fontSize: '18px' }">
                <v-col cols="auto">
                  Export:
                </v-col>
                <v-col>
                  <v-icon size='24' @click="exportStore()">mdi-file-export-outline</v-icon>
                </v-col>
              </v-row>
              <v-row :style="{ color: '#656cbe', fontSize: '18px' }">
                <v-col cols="auto">
                  Import:
                </v-col>
                <v-col cols="auto">
                  <v-file-input label="Import" accept="application/json" @change="importStore" hide-input
                    prepend-icon="mdi-file-import-outline" class="vFileInputOpacity"></v-file-input>
                </v-col>
              </v-row>
            </div>
            <!-- ---------- -->
            <v-spacer></v-spacer>
            <div style="text-align: left;">
              <v-row style="color: #656cbe;"
                @click="useComponentSearchStore().searchQuery = cards[cardId].author; useComponentSearchStore().filter = 'Author'">Author:
                {{ cards[cardId].author }}
              </v-row>
              <v-row style="color: #656cbe;">Co-Author/s: {{ cards[cardId].coAuthor.join(", ") }}</v-row>
            </div>
          </v-container>
        </v-col>
        <!-- --------------------------------------------------------------------------------------------- -->

        <v-col align="center" class="d-flex flex-column align-center justify-start">

          <v-card-title :style="{ fontSize: '34px', color: '#656cbe', fontWeight: 'bold' }"
            @click="useComponentSearchStore().searchQuery = cards[cardId].title; useComponentSearchStore().filter = 'Component Type'">
            {{ cards[cardId].title }}
          </v-card-title>

          <!-- Component -->
          <div class="text-center">
            <v-menu v-model="useStore.menu" :close-on-content-click="false" location="bottom" :persistent="menuPersistent">
              <template v-slot:activator="{ props }">
                <v-btn color="indigo" v-bind="props">
                  Menu as Popover
                </v-btn>
              </template>

              <v-card min-width="300">
                <v-list>
                  <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg" subtitle="Founder of Vuetify"
                    title="John Leider">
                    <template v-slot:append>
                      <v-btn :class="useStore.fav ? 'text-red' : ''" icon="mdi-heart" variant="text" @click="useStore.fav = !useStore.fav"></v-btn>
                    </template>
                  </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list>
                  <v-list-item>
                    <v-switch v-model="useStore.message" color="purple" label="Enable messages" hide-details></v-switch>
                  </v-list-item>

                  <v-list-item>
                    <v-switch v-model="useStore.hints" color="purple" label="Enable hints" hide-details></v-switch>
                  </v-list-item>
                </v-list>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn variant="text" @click="useStore.menu = false">
                    Cancel
                  </v-btn>
                  <v-btn color="primary" variant="text" @click="useStore.menu = false">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </div>
          <!-- --------------------------- -->

        </v-col>

        <v-col cols="auto">
          <v-expansion-panels v-model="useStore.panelOpen" style="max-width: 400px;" position-absolute="right-0">

            <!-- Panel -->
            <v-expansion-panel width="400" disabled>
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Captions
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Enter Captions
                        </span>
                        <span v-else key="1">
                          Collapsed_Caption
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Expanded_Panel_Components
              </v-expansion-panel-text>
            </v-expansion-panel>
            <!-- ----------------------------------------------------------------------------- -->

          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

</template>

<script setup>
import { useMyStefanPopoverMenuStore } from '~/stores/Menus/Stefan/StefanPopoverMenu'; //Remember to change { useMyAuthorTypeStore } to the correct store name

//Component Variables
const useStore = useMyStefanPopoverMenuStore(); //Remember to change useMyAuthorTypeStore() to the same name as the import in { } above
const cardId = 1; //Set the search card ID for title and author names etc. (Found in useSearchBaseComponents cards)

//Search Button Logic
import { useStefanSearchMenus } from '~/components/Menus/Stefan/StefanSearchMenus';
const { cards, matchesSearch } = useStefanSearchMenus(); ////Remember to change useSearchBaseComponents() to the same name as the import in { } above

//Import/ Export Logic [No need to change]
import { useExportImport } from '~/composables/useExportImport';
const { exportStore, importStore } = useExportImport(useStore);

import {watch} from 'vue'

const menuPersistent = ref(false);

watch(() => useStore.panelOpen, (newValue) => {

  //Open Popover if panel 1 is opened
  if (newValue === 0){
    useStore.menu = true;
    menuPersistent.value = true;
  } else {
    menuPersistent.value = false;
  }
  
});

</script>

<style>
/* Used to set v-file-input opacity to normal */
.vFileInputOpacity .v-icon {
  opacity: 1 !important;
  font-size: 20;
}
</style>