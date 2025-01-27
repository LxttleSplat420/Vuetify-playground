<template>
  <v-card elevation="5" v-if="matchesSearch(cards[0])" color="#e9eaf5">
    <v-container fluid fill-height>
      <v-row justify="center">
        <v-col align="center" class="d-flex flex-column align-center justify-start">

          <v-card-title :style="{ fontSize: '34px', color: '#656cbe', fontWeight: 'bold' }">
            {{ cards[0].title }}
          </v-card-title>

          <v-card
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
            :title="useMyStyledCardStore().titleEnabled === true ? useMyStyledCardStore().title : null"
            :subtitle="useMyStyledCardStore().subtitleEnabled === true ? useMyStyledCardStore().subtitle : null"
            :loading="useMyStyledCardStore().loading"
            :variant="useMyStyledCardStore().variant"
            :color="useMyStyledCardStore().color.toLowerCase()"
            :elevation="useMyStyledCardStore().variant !== 'flat' ? useMyStyledCardStore().elevation : null"

            ><v-card-actions v-if="useMyStyledCardStore().showActions">
              <v-btn>Click me</v-btn>
            </v-card-actions>

          </v-card>
        </v-col>

        <v-col cols="auto">
          <v-expansion-panels v-model="useMyStyledCardStore().panelOpen" style="max-width: 400px;"
            position-absolute="right-0">

            <!-- Title -->
            <v-expansion-panel width="400">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Show Title
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Enable/ Disable and set Title
                        </span>
                        <span v-else key="1">
                          {{ useMyStyledCardStore().titleEnabled }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useMyStyledCardStore().titleEnabled"></v-checkbox>
                <v-text-field v-model="useMyStyledCardStore().title" hide-details clearable
                  :disabled="!useMyStyledCardStore().titleEnabled"></v-text-field>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Subtitle -->
            <v-expansion-panel width="400">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Show subtitle
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Enable/ Disable and set Subtitle
                        </span>
                        <span v-else key="1">
                          {{ useMyStyledCardStore().subtitleEnabled }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useMyStyledCardStore().subtitleEnabled"></v-checkbox>
                <v-text-field v-model="useMyStyledCardStore().subtitle" hide-details clearable
                  :disabled="!useMyStyledCardStore().subtitleEnabled"></v-text-field>
              </v-expansion-panel-text>
            </v-expansion-panel>

             <!-- Actions -->
             <v-expansion-panel width="400">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Show Actions
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Enable/ Disable (Button example)
                        </span>
                        <span v-else key="1">
                          {{ useMyStyledCardStore().showActions }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useMyStyledCardStore().showActions"></v-checkbox>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Loading -->
            <v-expansion-panel width="400">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Loading
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Enable/ Disable
                        </span>
                        <span v-else key="1">
                          {{ useMyStyledCardStore().loading }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useMyStyledCardStore().loading"></v-checkbox>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Variant -->
            <v-expansion-panel>
              <v-expansion-panel-title v-slot="{ expanded }">
                <v-row no-gutters>
                  <v-col class="d-flex justify-start" cols="4">
                    Variant
                  </v-col>
                  <v-col class="text--secondary" cols="8">
                    <v-fade-transition leave-absolute>
                      <span v-if="expanded" key="0">
                        Select Variant Type
                      </span>
                      <span v-else key="1">
                        {{ useMyStyledCardStore().variant }}
                      </span>
                    </v-fade-transition>
                  </v-col>
                </v-row>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-row no-gutters>
                  <v-col>
                    <v-select v-model="useMyStyledCardStore().variant" :items="useMyStyledCardStore().variants"
                      chips flat></v-select>
                  </v-col>
                </v-row>

              </v-expansion-panel-text>
            </v-expansion-panel>

              <!-- Elevation -->
              <v-expansion-panel :disabled="useMyStyledCardStore().variant === 'flat' ? true: false">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Elevation
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Set elevated amount (default = 2)
                        </span>
                        <span v-else key="1">
                          {{ useMyStyledCardStore().elevation }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-row>
                  <v-col>
                    Elevated amount
                    <v-container fluid>

                      <v-container>
                        <v-row>
                          <v-col>
                            <v-text-field v-model="useMyStyledCardStore().elevation" label="Elevation Amount"
                              type="number" :min="0" :max="24" hint="Between 0 and 24 (default = 2)" persistent-hint
                              outlined width="220"></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>

                    </v-container>
                  </v-col>

                </v-row>
              </v-expansion-panel-text>

            </v-expansion-panel>

            <!-- Color -->
            <v-expansion-panel width="400">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Color
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Set the card color
                        </span>
                        <span v-else key="1">
                          {{ useMyStyledCardStore().color === "" ? 'undefined' : useMyStyledCardStore().color}}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-text-field v-model="useMyStyledCardStore().color" hide-details clearable></v-text-field>
              </v-expansion-panel-text>
            </v-expansion-panel>
             

          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
import { useMyStyledCardStore } from '~/stores/Cards/StyledCard';

//Search Button Logic
import { useSearchCards } from '~/components/Cards/SearchCards';
const { cards, matchesSearch } = useSearchCards();


</script>

<style></style>