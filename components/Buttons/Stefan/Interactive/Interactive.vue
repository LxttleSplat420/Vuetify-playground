<template>
  <!-- Interactive Button -->
  <v-card elevation="5" v-if="matchesSearch(cards[2])" color="#e9eaf5">
    <v-container fluid fill-height>
      <v-row justify="center">
        <v-col cols="auto">
          <v-container class="d-flex flex-column" style="height: 100%; position: relative;">
            <!-- Import/ Export Buttons -->
            <div>
              <v-row :style="{color: '#656cbe',  fontSize: '18px'}">
              <v-col cols="auto">
                Export:
              </v-col>
              <v-col>
                <v-icon size='24' @click="exportStore()">mdi-file-export-outline</v-icon>
              </v-col>
              </v-row>
              <v-row :style="{color: '#656cbe',  fontSize: '18px'}">
                <v-col cols="auto">
                Import:
              </v-col>
              <v-col>
                <v-file-input label="Import" accept="application/json" @change="importStore" 
                   hide-input prepend-icon="mdi-file-import-outline" class="vFileInputOpacity" ></v-file-input>  
                  </v-col>    
              </v-row>
            </div>
            <!-- ---------- -->
            <v-spacer></v-spacer>
            <div style="text-align: left;">

              <v-row style="color: #656cbe;"class="cursor-pointer"
              @click="useComponentSearchStore().searchQuery = cards[cardId].author; useComponentSearchStore().filter = 'Author'"
              >Author: {{ cards[cardId].author }}
              </v-row>
              <v-row style="color: #656cbe;">Co-Author/s: {{ cards[cardId].coAuthor.join(", ") }}
              </v-row>
            </div>
          </v-container>
        </v-col>


        <v-col align="center" class="d-flex flex-column align-center justify-start">

          <v-card-title class="cursor-pointer" :style="{ fontSize: '34px', color: '#656cbe', fontWeight: 'bold' }"
          @click="useComponentSearchStore().searchQuery = cards[cardId].title; useComponentSearchStore().filter = 'Component Type'">
            {{ cards[cardId].title }}
          </v-card-title>

          <v-tooltip text="Tooltip" :open-on-click="useStore.onClick" :open-on-hover="useStore.onHover"
            :open-on-focus="useStore.onFocus" :location="useStore.location">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props"
                @click=" useStore.snackbarEnabled === true ? useStore.snackbar = !useStore.snackbar : null"
                class="my-auto">{{ cards[cardId].title }} Button</v-btn>
            </template>
          </v-tooltip>

          <!-- Snackbar -->
          <v-snackbar v-model="useStore.snackbar" location="center">
            {{ useStore.snackbarText }}
            <template v-slot:actions>
              <v-btn @click="useStore.onClicked()">Close</v-btn>
            </template>
          </v-snackbar>

        </v-col>

        <v-col cols="auto">
          <v-expansion-panels v-model="useStore.panelOpen" style="max-width: 400px;" position-absolute="right-0">

            <!-- Show -->
            <v-expansion-panel style="width: 400px;">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Show Tooltip when
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Choose when to display tooltip
                        </span>
                        <span v-else key="1">
                          {{ useStore.showType }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-row>
                  <v-col>
                    Show Types
                    <v-container fluid>
                      <v-container>
                        <v-row>
                          <v-col>
                            <v-select v-model="useStore.showType" :items="useStore.showTypes" chips flat
                              @update:menu="useStore.updateShowType"></v-select>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-container>
                  </v-col>

                </v-row>
              </v-expansion-panel-text>

            </v-expansion-panel>

            <!-- Location -->
            <v-expansion-panel style="width: 400px;">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Tooltip Location
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Choose where to display tooltip
                        </span>
                        <span v-else key="1">
                          {{ useStore.location }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-row>
                  <v-col>
                    Locations:
                    <v-container fluid>
                      <v-container>
                        <v-row>
                          <v-col>
                            <v-select v-model="useStore.location" :items="useStore.locations" chips flat></v-select>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-container>
                  </v-col>

                </v-row>
              </v-expansion-panel-text>

            </v-expansion-panel>

            <!-- Snackbar/ PopUp -->
            <v-expansion-panel>
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Snackbar/ PopUp
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Enable/ Disable and set text
                        </span>
                        <span v-else key="1">
                          {{ useStore.snackbarEnabled }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-col>
                  <v-checkbox v-model="useStore.snackbarEnabled"></v-checkbox>
                </v-col>
                <v-col>
                  <v-text-field v-model="useStore.snackbarText" :disabled="!useStore.snackbarEnabled" hide-details
                    clearable @click:clear="useStore.clearSnackbarText()"></v-text-field>
                </v-col>

              </v-expansion-panel-text>
            </v-expansion-panel>

          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
import { useButtonInteractiveStore } from "~/stores/Buttons/Stefan/Interactive";

//Component Variables
const useStore = useButtonInteractiveStore();
const cardId = 2; //Search card ID

//Search Button Logic
import { useSearchButtons } from '~/components/Buttons/Stefan/StefanSearchButtons.ts'; //Add card search info here
const { cards, matchesSearch } = useSearchButtons();

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