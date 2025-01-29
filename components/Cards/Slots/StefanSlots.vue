<template>
  <v-card elevation="5" v-if="matchesSearch(cards[cardId])" color="#e9eaf5">
    <v-container fluid fill-height>
      <v-row justify="center">
        <!-- Author and Co-Author Labels -->
        <v-col cols="auto">
          <v-container class="d-flex flex-column" style="height: 100%; position: relative;">
            <v-spacer></v-spacer>
            <div style="text-align: left;">
              <v-row style="color: #656cbe;">Author: {{ cards[cardId].author }}
              </v-row>
              <v-row style="color: #656cbe;">Co-Author: {{ cards[cardId].coAuthor }}</v-row>
            </div>
          </v-container>
        </v-col>
        <v-col align="center" class="d-flex flex-column align-center justify-start">

          <v-card-title :style="{ fontSize: '34px', color: '#656cbe', fontWeight: 'bold' }">
            {{ cards[cardId].title }}
          </v-card-title>

          <!-- Component -->
          <v-card class="mx-auto" subtitle="prepend and append" title="Avatars">
            <!-- Prepend Slot components -->
            <template v-slot:prepend v-if="useCardStore.prependEnable">
              <v-avatar color="blue-darken-2" v-if="useCardStore.prependItem.includes('mdi-alarm')">
                <v-icon icon="mdi-alarm"></v-icon>
              </v-avatar>
            </template>
            <!-- Append Slot components -->
            <template v-slot:append v-if="useCardStore.appendEnable">
              <v-avatar color="blue-darken-2" v-if="useCardStore.appendItem.includes('mdi-alarm')">
                <v-icon icon="mdi-alarm"></v-icon>
              </v-avatar>
              <v-avatar size="24" v-if="useCardStore.appendItem.includes('Avatar')">
                <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-avatar>
              <v-btn v-if="useMySlotsCardStore().appendItem.includes('Styled Button')" :variant="useButtonStyleStore().styled.variant" :elevation="useButtonStyleStore().styled.elevation"
            :rounded="useButtonStyleStore().styled.rounded"
            :color="useButtonStyleStore().styled.color.toLowerCase() === '' ? 'black' : useButtonStyleStore().styled.color.toLowerCase()"
            :flat="useButtonStyleStore().styled.flat" :height="useButtonStyleStore().styled.height"
            :width="useButtonStyleStore().styled.width" :style="{ backgroundColor: 'white !important' }" class="my-auto">
            {{ useButtonStyleStore().styled.name }}
          </v-btn>


            </template>
            <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
          </v-card>

        </v-col>

        <v-col cols="auto">
          <v-expansion-panels v-model="useCardStore.panelOpen" style="max-width: 400px;" position-absolute="right-0">

            <!-- Prepend -->
            <v-expansion-panel width="400">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Prepend
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Add a prepend slot
                        </span>
                        <span v-else key="1">
                          {{ useCardStore.prependEnable }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useCardStore.prependEnable"></v-checkbox>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Append -->
            <v-expansion-panel width="400">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Append
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Add an append slot
                        </span>
                        <span v-else key="1">
                          {{ useCardStore.appendEnable }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-row>
                  <v-col cols="3">
                    <v-checkbox v-model="useCardStore.appendEnable"></v-checkbox>
                  </v-col>
                  <v-col>
                    <v-select :items="useCardStore.items" v-model="useCardStore.appendItem" multiple
                      label="Appended Components"></v-select>
                  </v-col>
                </v-row>
              </v-expansion-panel-text>
            </v-expansion-panel>


          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
import { useMySlotsCardStore } from '~/stores/Cards/SlotsCard';
import { useButtonStyleStore } from '~/components/Buttons/StyledButtons/stores/StefanStyle';

//Component Variables
const useCardStore = useMySlotsCardStore();
const cardId = 2; //Search card ID

//Search Button Logic
import { useSearchCards } from '~/components/Cards/SearchCards';
const { cards, matchesSearch } = useSearchCards();

//Imports for Slot components
// import { StyledButtonComponent } from '../Buttons/StyledButton.vue';
// import StyledCard from './StyledCard.vue';
</script>

<style></style>