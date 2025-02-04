<template>
  <v-card elevation="5" v-if="matchesSearch(cards[cardId])" color="#e9eaf5">
    <v-container fluid fill-height>
      <v-row justify="center">
        <!-- Author and Co-Author Labels -->
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
              <v-row style="color: #656cbe;">Author: {{ cards[cardId].author }}
              </v-row>
              <v-row style="color: #656cbe;">Co-Author/s: {{ cards[cardId].coAuthor.join(", ") }}</v-row>
            </div>
          </v-container>
        </v-col>
        <v-col align="center" class="d-flex flex-column align-center justify-start">

          <v-card-title :style="{ fontSize: '34px', color: '#656cbe', fontWeight: 'bold' }">
            {{ cards[cardId].title }}
          </v-card-title>

          <v-card
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
            :title="useStore.titleEnabled === true ? useStore.title : null"
            :subtitle="useStore.subtitleEnabled === true ? useStore.subtitle : null"
            :loading="useStore.loading" :variant="useStore.variant" :color="useStore.color.toLowerCase()"
            :elevation="useStore.variant !== 'flat' ? useStore.elevation : null"><v-card-actions
              v-if="useStore.showActions">
              <v-btn>Click me</v-btn>
            </v-card-actions>

          </v-card>
        </v-col>

        <v-col cols="auto">
          <v-expansion-panels v-model="useStore.panelOpen" style="max-width: 400px;" position-absolute="right-0">

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
                          {{ useStore.titleEnabled }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useStore.titleEnabled"></v-checkbox>
                <v-text-field v-model="useStore.title" hide-details clearable
                  :disabled="!useStore.titleEnabled"></v-text-field>
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
                          {{ useStore.subtitleEnabled }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useStore.subtitleEnabled"></v-checkbox>
                <v-text-field v-model="useStore.subtitle" hide-details clearable
                  :disabled="!useStore.subtitleEnabled"></v-text-field>
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
                          {{ useStore.showActions }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useStore.showActions"></v-checkbox>
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
                          {{ useStore.loading }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useStore.loading"></v-checkbox>
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
                        {{ useStore.variant }}
                      </span>
                    </v-fade-transition>
                  </v-col>
                </v-row>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-row no-gutters>
                  <v-col>
                    <v-select v-model="useStore.variant" :items="useStore.variants" chips flat></v-select>
                  </v-col>
                </v-row>

              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Elevation -->
            <v-expansion-panel :disabled="useStore.variant === 'flat' ? true : false">
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
                          {{ useStore.elevation }}
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
                            <v-text-field v-model="useStore.elevation" label="Elevation Amount" type="number"
                              :min="0" :max="24" hint="Between 0 and 24 (default = 2)" persistent-hint outlined
                              width="220"></v-text-field>
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
                          {{ useStore.color === "" ? 'undefined' : useStore.color }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-text-field v-model="useStore.color" hide-details clearable></v-text-field>
              </v-expansion-panel-text>
            </v-expansion-panel>


          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
import { useMyStyledCardStore } from '~/stores/Cards/Stefan/StyledCard';

//Component Variables
const useStore = useMyStyledCardStore();
const cardId = 0; //Search card ID

//Search Button Logic
import { useSearchCards } from '~/components/Cards/Stefan/StefanSearchCards';
const { cards, matchesSearch } = useSearchCards();

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