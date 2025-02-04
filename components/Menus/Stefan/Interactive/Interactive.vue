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
            <v-menu :location="useStore.location" :open-delay="useStore.openDelay" :close-delay="useStore.closeDelay"
            :open-on-click="useStore.openType === 'open-on-click'" :open-on-hover="useStore.openType === 'open-on-hover'"
            :open-on-focus="useStore.openType === 'open-on-focus'" :close-on-back="useStore.closeType === 'close-on-back'"
            :close-on-content-click="useStore.closeType === 'close-on-content-click'">
              <template v-slot:activator="{ props }">
                <v-btn color="primary" v-bind="props">
                  Dropdown
                </v-btn>
              </template>

              <v-list>
                <v-list-item v-for="(item, index) in useStore.items" :key="index">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <!-- -------------------------------------------------- -->

        </v-col>

        <v-col cols="auto">
          <v-expansion-panels v-model="useStore.panelOpen" style="max-width: 400px;" position-absolute="right-0">

            <!-- Location -->
            <v-expansion-panel width="400">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Location
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Select a Menu pop-up Location
                        </span>
                        <span v-else key="1">
                         {{ "Location: " + useStore.location }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-select
                  :items="useStore.locations"
                  v-model="useStore.location"
                  label="Menu Location:"
                ></v-select>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <!-- ----------------------------------------------------------------------------- -->

            <!-- Delay -->
            <v-expansion-panel width="400">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Delays & Open Type
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Delays only for open-on-hover
                        </span>
                        <span v-else key="1">
                         {{ "Open-delay: " + useStore.openDelay + "; Close-delay: " + useStore.closeDelay }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-select
                  :items="useStore.openTypes  "
                  v-model="useStore.openType"
                  label="Open when:"
                ></v-select>
                <v-text-field hint="Default = 300" type="number" :min="0" label="Open-delay" v-model="useStore.openDelay" :disabled="useStore.openType !== 'open-on-hover'"></v-text-field>
                <v-text-field hint="Default = 250" type="number" :min="0" label="Close-delay" v-model="useStore.closeDelay" :disabled="useStore.openType !== 'open-on-hover'"></v-text-field>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <!-- ----------------------------------------------------------------------------- -->

            <!-- Close Type -->
            <v-expansion-panel width="400">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Item Close
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Select when to close items
                        </span>
                        <span v-else key="1">
                         {{ useStore.closeType }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-select
                  :items="useStore.closeTypes  "
                  v-model="useStore.closeType"
                  label="Close when:"
                ></v-select>
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
import { useMyStefanInteractveMenuStore } from '~/stores/Menus/Stefan/StefanInterativeMenu'; //Remember to change { useMyAuthorTypeStore } to the correct store name

//Component Variables
const useStore = useMyStefanInteractveMenuStore(); //Remember to change useMyAuthorTypeStore() to the same name as the import in { } above
const cardId = 0; //Set the search card ID for title and author names etc. (Found in useSearchBaseComponents cards)

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