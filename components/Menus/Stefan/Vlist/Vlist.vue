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
            <v-btn color="primary">
              Open menu

              <v-menu activator="parent">
                <v-list>
                  <v-list-item v-for="i in 5" :key="i" link>
                    <v-list-item-title>Item {{ i }}</v-list-item-title>
                    <template v-slot:append>
                      <v-icon icon="mdi-menu-right" size="x-small"></v-icon>
                    </template>

                    <v-menu :open-on-focus="false" activator="parent" open-on-hover submenu>
                      <v-list>
                        <v-list-item v-for="j in 5" :key="j" link>
                          <v-list-item-title>Item {{ i }} - {{ j }}</v-list-item-title>
                          <template v-slot:append>
                            <v-icon icon="mdi-menu-right" size="x-small"></v-icon>
                          </template>

                          <v-menu :open-on-focus="false" activator="parent" open-on-hover submenu>
                            <v-list>
                              <v-list-item v-for="k in 5" :key="k" link>
                                <v-list-item-title>Item {{ i }} - {{ j }} - {{ k }}</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-btn>
          </div>
          <!-- -------------------------------------------------- -->


        </v-col>

        <v-col cols="auto">
          <v-expansion-panels v-model="useStore.panelOpen" style="max-width: 400px;" position-absolute="right-0">

            <!-- Panel -->
            <v-expansion-panel width="400" disabled>
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Caption
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Expanded_Caption
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
import { useMyStefanVlistMenuStore } from '~/stores/Menus/Stefan/StefanVlistMenu'; //Remember to change { useMyAuthorTypeStore } to the correct store name

//Component Variables
const useStore = useMyStefanVlistMenuStore(); //Remember to change useMyAuthorTypeStore() to the same name as the import in { } above
const cardId = 2; //Set the search card ID for title and author names etc. (Found in useSearchBaseComponents cards)

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