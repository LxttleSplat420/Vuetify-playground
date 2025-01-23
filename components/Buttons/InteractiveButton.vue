<template>
  <!-- Interactive Button -->
  <v-card elevation="5" v-if="matchesSearch(cards[2])" color="#e9eaf5">
    <v-container fluid fill-height>
      <v-row  justify="center">
        <v-col align="center" class="d-flex flex-column align-center justify-start">     
          
          <v-card-title :style="{ fontSize: '34px', color: '#656cbe', fontWeight: 'bold'}">
            {{ cards[2].title }}
          </v-card-title>

          <v-tooltip text="Tooltip" :open-on-click="useButtonInteractiveStore().onClick"
            :open-on-hover="useButtonInteractiveStore().onHover" :open-on-focus="useButtonInteractiveStore().onFocus"
            :location="useButtonInteractiveStore().location">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props"
                @click=" useButtonInteractiveStore().snackbarEnabled === true ? useButtonInteractiveStore().snackbar = !useButtonInteractiveStore().snackbar : null"
                class="my-auto"
                >{{cards[2].title }} Button</v-btn>
            </template>
          </v-tooltip>

          <!-- Snackbar -->
          <v-snackbar v-model="useButtonInteractiveStore().snackbar" location="center">
            {{ useButtonInteractiveStore().snackbarText }}
            <template v-slot:actions>
              <v-btn @click="useButtonInteractiveStore().onClicked()">Close</v-btn>
            </template>
          </v-snackbar>

        </v-col>

        <v-col cols="auto">
          <v-expansion-panels v-model="useButtonInteractiveStore().panelOpen" style="max-width: 400px;"
            position-absolute="right-0">

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
                          {{ useButtonInteractiveStore().showType }}
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
                            <v-select v-model="useButtonInteractiveStore().showType"
                              :items="useButtonInteractiveStore().showTypes" chips flat
                              @update:menu="useButtonInteractiveStore().updateShowType"></v-select>
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
                          {{ useButtonInteractiveStore().location }}
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
                            <v-select v-model="useButtonInteractiveStore().location"
                              :items="useButtonInteractiveStore().locations" chips flat></v-select>
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
                          {{ useButtonInteractiveStore().snackbarEnabled }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-col>
                  <v-checkbox v-model="useButtonInteractiveStore().snackbarEnabled"></v-checkbox>
                </v-col>
                <v-col>
                  <v-text-field v-model="useButtonInteractiveStore().snackbarText"
                    :disabled="!useButtonInteractiveStore().snackbarEnabled" hide-details clearable
                    @click:clear="useButtonInteractiveStore().clearSnackbarText()"></v-text-field>
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
import { useButtonInteractiveStore } from "~/stores/buttonInteractive";

import { useComponentSearchStore } from '~/stores/componentSearch';

// Search Query
import { ref, computed } from "vue";

// Reactive data for cards and search query
const cards = ref([
  { id: 0, title: "Styled" },
  { id: 1, title: "Activity" },
  { id: 2, title: "Interactive" },
  // Add more cards as needed
]);

const searchQuery = ref(""); // Reactive search input

// Computed property for filtered cards
const matchesSearch = (card) => {
  return card.title.toLowerCase().includes(useComponentSearchStore().searchQuery.toLowerCase());
};

</script>

<style>

</style>