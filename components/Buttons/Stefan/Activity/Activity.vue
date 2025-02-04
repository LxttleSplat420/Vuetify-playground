<template>
  <!-- Activity Button -->
  <v-card elevation="5" v-if="matchesSearch(cards[cardId])" color="#e9eaf5">

    <v-container fluid fill-height >
      <v-row>
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
              <v-col cols="auto">
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


          <v-btn :active="useStore.active" :disabled="useStore.disabled"
            :loading="useStore.loading !== 'false' ? useStore.loading : false"
            :ripple="useStore.ripple === 'false' ? false : { class: 'text-' + useStore.ripple }"
            class="my-auto">
            {{ cards[cardId].title }} Button
          </v-btn>


        </v-col>

        <v-col cols="auto">
          <v-expansion-panels v-model="useStore.panelOpen" style="max-width: 400px;"
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
                          {{ useStore.active }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useStore.active"></v-checkbox>
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
                          {{ useStore.disabled }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useStore.disabled"></v-checkbox>
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
                          {{ useStore.loading }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-col>
                  <v-checkbox v-model="useStore.isLoading"
                    @change="useStore.enableLoading()"></v-checkbox>
                </v-col>
                <v-col>
                  <v-text-field v-model="useStore.loading"
                    :disabled="!useStore.isLoading" placeholder="primary" hide-details clearable
                    @click:clear="useStore.clearLoadingColor"></v-text-field>
                </v-col>

              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Ripple -->
            <v-expansion-panel :disabled="useStore.isLoading">
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
                          {{ useStore.ripple }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-col>
                  <v-checkbox v-model="useStore.isRipple"
                    @change="useStore.enableRipple()"></v-checkbox>
                </v-col>
                <v-col>
                  <v-text-field v-model="useStore.ripple" :disabled="!useStore.isRipple"
                    placeholder="true" hide-details clearable
                    @click:clear="useStore.clearRippleColor()"></v-text-field>
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
import { useButtonActivityStore } from '~/stores/Buttons/Stefan/Activity'

//Component Variables
const useStore = useButtonActivityStore();
const cardId = 1; //Search card ID

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