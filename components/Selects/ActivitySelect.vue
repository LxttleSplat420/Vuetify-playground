<template>
    <v-card elevation="5" v-if="matchesSearch(cards[1])" color="#e9eaf5">
      <v-container fluid fill-height>
        <v-row justify="center">
          <v-col align="center" class="d-flex flex-column align-center justify-start">

            <v-card-title :style="{ fontSize: '34px', color: '#656cbe', fontWeight: 'bold' }">
              {{ cards[1].title }}
            </v-card-title>

            <v-select
            :readonly="useMySelectActivityStore().readonly"
            :items="useMySelectActivityStore().items"
            :disabled="useMySelectActivityStore().disabled"
            width="500"
            ></v-select>
          </v-col>

          <v-col cols="auto">
            <v-expansion-panels v-model="useMySelectActivityStore().panelOpen" style="max-width: 400px;"
              position-absolute="right-0">

              <!-- Readonly -->
              <v-expansion-panel width="400">
                <v-expansion-panel-title>
                  <template v-slot:default="{ expanded }">
                    <v-row no-gutters>
                      <v-col class="d-flex justify-start" cols="4">
                        Readonly
                      </v-col>
                      <v-col class="text-grey" cols="8">
                        <v-fade-transition leave-absolute>
                          <span v-if="expanded" key="0">
                            Enable/ Disable
                          </span>
                          <span v-else key="1">
                            {{ useMySelectActivityStore().readonly }}
                          </span>
                        </v-fade-transition>
                      </v-col>
                    </v-row>
                  </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-checkbox  v-model="useMySelectActivityStore().readonly"></v-checkbox>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <!-- Disabled -->
              <v-expansion-panel width="400">
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
                            {{ useMySelectActivityStore().disabled }}
                          </span>
                        </v-fade-transition>
                      </v-col>
                    </v-row>
                  </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-checkbox  v-model="useMySelectActivityStore().disabled"></v-checkbox>
                </v-expansion-panel-text>
              </v-expansion-panel>


            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
</template>

<script setup>
import { useMySelectActivityStore } from '~/stores/Selects/selectActivity';

//Search Button Logic
import { useSearchSelects } from '~/components/Selects/SearchSelects.ts';
const { cards, matchesSearch } = useSearchSelects();


</script>

<style></style>