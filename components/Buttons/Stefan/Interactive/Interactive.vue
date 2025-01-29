<template>
  <!-- Interactive Button -->
  <v-card elevation="5" v-if="matchesSearch(cards[2])" color="#e9eaf5">
    <v-container fluid fill-height>
      <v-row  justify="center">

        <v-col cols="auto">
          <v-container class="d-flex flex-column" style="height: 100%; position: relative;">
            <v-spacer></v-spacer>
            <div style="text-align: left;">
              <v-row style="color: #656cbe;">Author: {{ cards[cardId].author }}
                </v-row>
                <v-row style="color: #656cbe;">Co-Author/s: {{ cards[cardId].coAuthor.join(", ") }}</v-row>
            </div>
          </v-container>
        </v-col>


        <v-col align="center" class="d-flex flex-column align-center justify-start">     
          
          <v-card-title :style="{ fontSize: '34px', color: '#656cbe', fontWeight: 'bold'}">
            {{ cards[cardId].title }}
          </v-card-title>

          <v-tooltip text="Tooltip" :open-on-click="useButtonStore.onClick"
            :open-on-hover="useButtonStore.onHover" :open-on-focus="useButtonStore.onFocus"
            :location="useButtonStore.location">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props"
                @click=" useButtonStore.snackbarEnabled === true ? useButtonStore.snackbar = !useButtonStore.snackbar : null"
                class="my-auto"
                >{{cards[cardId].title }} Button</v-btn>
            </template>
          </v-tooltip>

          <!-- Snackbar -->
          <v-snackbar v-model="useButtonStore.snackbar" location="center">
            {{ useButtonStore.snackbarText }}
            <template v-slot:actions>
              <v-btn @click="useButtonStore.onClicked()">Close</v-btn>
            </template>
          </v-snackbar>

        </v-col>

        <v-col cols="auto">
          <v-expansion-panels v-model="useButtonStore.panelOpen" style="max-width: 400px;"
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
                          {{ useButtonStore.showType }}
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
                            <v-select v-model="useButtonStore.showType"
                              :items="useButtonStore.showTypes" chips flat
                              @update:menu="useButtonStore.updateShowType"></v-select>
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
                          {{ useButtonStore.location }}
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
                            <v-select v-model="useButtonStore.location"
                              :items="useButtonStore.locations" chips flat></v-select>
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
                          {{ useButtonStore.snackbarEnabled }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-col>
                  <v-checkbox v-model="useButtonStore.snackbarEnabled"></v-checkbox>
                </v-col>
                <v-col>
                  <v-text-field v-model="useButtonStore.snackbarText"
                    :disabled="!useButtonStore.snackbarEnabled" hide-details clearable
                    @click:clear="useButtonStore.clearSnackbarText()"></v-text-field>
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
const useButtonStore = useButtonInteractiveStore();
const cardId = 2; //Search card ID

//Search Button Logic
import { useSearchButtons } from '~/components/Buttons/Stefan/StefanSearchButtons.ts'; //Add card search info here
const {cards, matchesSearch} = useSearchButtons();

</script>

<style>

</style>