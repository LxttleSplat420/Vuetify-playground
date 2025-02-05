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
              <v-row style="color: #656cbe;"class="cursor-pointer"
                @click="useComponentSearchStore().searchQuery = cards[cardId].author; useComponentSearchStore().filter = 'Author'">Author:
                {{ cards[cardId].author }}
              </v-row>
              <v-row style="color: #656cbe;">Co-Author/s: {{ cards[cardId].coAuthor.join(", ") }}</v-row>
            </div>
          </v-container>
        </v-col>
        <!-- --------------------------------------------------------------------------------------------- -->

        <v-col align="center" class="d-flex flex-column align-center justify-start">

          <v-card-title class="cursor-pointer":style="{ fontSize: '34px', color: '#656cbe', fontWeight: 'bold' }"
            @click="useComponentSearchStore().searchQuery = cards[cardId].title; useComponentSearchStore().filter = 'Component Type'">
            {{ cards[cardId].title }}
          </v-card-title>
          <!-- Component -->
          <v-row>
            <v-col cols="12" sm="6">
              <v-card height="200px" width="400px">
                <v-card-title class="bg-blue d-flex align-center">
                  <span class="text-h5">Menu</span>

                  <v-spacer></v-spacer>

                  <v-menu v-model="useStore.menuOpen">
                    <template v-slot:activator="{ props }">
                      <v-btn :icon="useStore.menuOpen ? useStore.iconOpen : useStore.iconClosed" variant="text"
                        v-bind="props"></v-btn>
                    </template>

                    <v-list>
                      <v-list-item v-for="(item, i) in useStore.items" :key="i"
                        @click="useStore.item = item.title; useStore.itemIndex = i">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-card-title>

                <v-card-text>{{ "Item Name: " + useStore.item }}</v-card-text>
                <v-card-text>{{ useStore.itemIndex === null ? "" : "Item Index: " + useStore.itemIndex }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <!-- -------------------------------------------------------------------- -->

        </v-col>

        <v-col cols="auto">
          <v-expansion-panels v-model="useStore.panelOpen" style="max-width: 400px;" position-absolute="right-0">

            <!-- Panel -->
            <v-expansion-panel width="400">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Icon
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Enter mdi icons to use
                        </span>
                        <span v-else key="1">
                          {{ "Menu Closed: " + useStore.iconClosed + "; Menu Open: " + useStore.iconOpen }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-text-field label="Menu Close:" v-model="useStore.iconClosed"></v-text-field>
                <v-text-field label="Menu Open:" v-model="useStore.iconOpen"></v-text-field>
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
import { useMyStefanStyledMenuStore } from '~/stores/Menus/Stefan/StefanStyledMenu'; //Remember to change { useMyAuthorTypeStore } to the correct store name

//Component Variables
const useStore = useMyStefanStyledMenuStore(); //Remember to change useMyAuthorTypeStore() to the same name as the import in { } above
const cardId = 3; //Set the search card ID for title and author names etc. (Found in useSearchBaseComponents [Line 101 below] cards)

//Search Button Logic
import { useStefanSearchMenus } from '~/components/Menus/Stefan/StefanSearchMenus';
const { cards, matchesSearch } = useStefanSearchMenus(); ////Remember to change useSearchBaseComponents() to the same name as the import in { } above

//Import/ Export Logic [No need to change]
import { useExportImport } from '~/composables/useExportImport';
const { exportStore, importStore } = useExportImport(useStore);

</script>

<style>
/* Used to set v-file-input opacity to normal */
.vFileInputOpacity .v-icon {
  opacity: 1 !important;
  font-size: 20;
}
</style>