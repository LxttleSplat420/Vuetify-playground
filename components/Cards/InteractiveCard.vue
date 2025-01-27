<template>
  <v-card elevation="5" v-if="matchesSearch(cards[1])" color="#e9eaf5">
    <v-container fluid fill-height>
      <v-row justify="center">
        <v-col align="center" class="d-flex flex-column align-center justify-start">

          <v-card-title :style="{ fontSize: '34px', color: '#656cbe', fontWeight: 'bold' }">
            {{ cards[1].title }}
          </v-card-title>

          <v-card text="Click me to open a Webpage!" :hover="useMyInteractiveCardStore().hover"
            :href="useMyInteractiveCardStore().hrefEnable === true ? useMyInteractiveCardStore().href : null"
            rel="noopener" target="_blank" append-icon="mdi-open-in-new" prepend-icon="mdi-github"
            title="Link to a Webpage" class="mx-auto"
            width = "400">

            <v-card-actions v-if="useMyInteractiveCardStore().revealEnabled">
              <v-btn color="teal-accent-4" text="Learn More" variant="text" @click="useMyInteractiveCardStore().reveal = true"></v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card v-if="useMyInteractiveCardStore().reveal" class="position-absolute w-100" height="100%" style="bottom: 0;">
                <v-card-text class="pb-0">
                  <p class="text-h4">Enable Href to go to:</p>

                  <p class="text-medium-emphasis">
                    {{ useMyInteractiveCardStore().href }}
                  </p>
                </v-card-text>

                <v-card-actions class="pt-0">
                  <v-btn color="teal-accent-4" text="Close" variant="text" @click="useMyInteractiveCardStore().reveal = false"></v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>

          </v-card>
        </v-col>

        <v-col cols="auto">
          <v-expansion-panels v-model="useMyInteractiveCardStore().panelOpen" style="max-width: 400px;"
            position-absolute="right-0">

            <!-- Hover -->
            <v-expansion-panel width="400">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Hover
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Enable/ Disable
                        </span>
                        <span v-else key="1">
                          {{ useMyInteractiveCardStore().hover }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useMyInteractiveCardStore().hover"></v-checkbox>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Href -->
            <v-expansion-panel width="400" :disabled="useMyInteractiveCardStore().revealEnabled">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Href
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Enable/ Disable link to webpage
                        </span>
                        <span v-else key="1">
                          {{ useMyInteractiveCardStore().hrefEnable }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useMyInteractiveCardStore().hrefEnable"></v-checkbox>
                <v-text-field v-model="useMyInteractiveCardStore().href"
                  :disabled="!useMyInteractiveCardStore().hrefEnable"></v-text-field>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Card Reveal -->
            <v-expansion-panel width="400" :disabled="useMyInteractiveCardStore().hrefEnable">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Card Reveal
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Enable/ Disable
                        </span>
                        <span v-else key="1">
                          {{ useMyInteractiveCardStore().revealEnabled }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useMyInteractiveCardStore().revealEnabled"></v-checkbox>
              </v-expansion-panel-text>
            </v-expansion-panel>

          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
import { useMyInteractiveCardStore } from '~/stores/Cards/InteractiveCard';

//Search Button Logic
import { useSearchCards } from '~/components/Cards/SearchCards.ts';
const { cards, matchesSearch } = useSearchCards();


</script>

<style></style>