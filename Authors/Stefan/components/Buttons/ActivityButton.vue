<template>
  <!-- Activity Button -->
  <v-card elevation="5" v-if="matchesSearch(cards[cardId])" color="#e9eaf5">

    <v-container fluid fill-height >
      <v-row>
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


          <v-btn :active="useButtonStore.active" :disabled="useButtonStore.disabled"
            :loading="useButtonStore.loading !== 'false' ? useButtonStore.loading : false"
            :ripple="useButtonStore.ripple === 'false' ? false : { class: 'text-' + useButtonStore.ripple }"
            class="my-auto">
            {{ cards[cardId].title }} Button
          </v-btn>


        </v-col>

        <v-col cols="auto">
          <v-expansion-panels v-model="useButtonStore.panelOpen" style="max-width: 400px;"
            position-absolute="right-0">

            <!-- Active -->
            <v-expansion-panel style="width: 400px;">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Active
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Enable/ Disable
                        </span>
                        <span v-else key="1">
                          {{ useButtonStore.active }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useButtonStore.active"></v-checkbox>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Disabled -->
            <v-expansion-panel style="width: 400px;">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Disabled
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Enable/ Disable
                        </span>
                        <span v-else key="1">
                          {{ useButtonStore.disabled }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useButtonStore.disabled"></v-checkbox>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Loading -->
            <v-expansion-panel>
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Loading bar
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Enable/ Disable and set a color
                        </span>
                        <span v-else key="1">
                          {{ useButtonStore.loading }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-col>
                  <v-checkbox v-model="useButtonStore.isLoading"
                    @change="useButtonStore.enableLoading()"></v-checkbox>
                </v-col>
                <v-col>
                  <v-text-field v-model="useButtonStore.loading"
                    :disabled="!useButtonStore.isLoading" placeholder="primary" hide-details clearable
                    @click:clear="useButtonStore.clearLoadingColor"></v-text-field>
                </v-col>

              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Ripple -->
            <v-expansion-panel :disabled="useButtonStore.isLoading">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Ripple
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Enable/ Disable and set a color
                        </span>
                        <span v-else key="1">
                          {{ useButtonStore.ripple }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-col>
                  <v-checkbox v-model="useButtonStore.isRipple"
                    @change="useButtonStore.enableRipple()"></v-checkbox>
                </v-col>
                <v-col>
                  <v-text-field v-model="useButtonStore.ripple" :disabled="!useButtonStore.isRipple"
                    placeholder="true" hide-details clearable
                    @click:clear="useButtonStore.clearRippleColor()"></v-text-field>
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
//Import component store
import { useButtonActivityStore } from '~/Authors/Stefan/stores/Buttons/buttonActivity'

//Component Variables
const useButtonStore = useButtonActivityStore();
const cardId = 1; //Search card ID

//Search Button Logic
import { useSearchButtons } from '~/Authors/Stefan/components/Buttons/SearchButtons'; //Add card search info here
const { cards, matchesSearch } = useSearchButtons();

</script>

<style></style>