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
              <v-col>
                Export:
              </v-col>
              <v-col>
                <v-icon size='24' @click="exportStore()">mdi-file-export-outline</v-icon>
              </v-col>
              </v-row>
              <v-row :style="{color: '#656cbe',  fontSize: '18px'}">
                <v-col>
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
              <v-row style="color: #656cbe;">Co-Author/s: {{ cards[cardId].coAuthor.join(", ") }}</v-row>
            </div>
          </v-container>
        </v-col>
        <v-col align="center" class="d-flex flex-column align-center justify-start">

          <v-card-title class="cursor-pointer":style="{ fontSize: '34px', color: '#656cbe', fontWeight: 'bold' }"
          @click="useComponentSearchStore().searchQuery = cards[cardId].title; useComponentSearchStore().filter = 'Component Type'">
            {{ cards[cardId].title }}
          </v-card-title>

          <v-select :readonly="useStore.readonly" :items="useStore.items"
            :disabled="useStore.disabled" width="500"></v-select>
        </v-col>

        <v-col cols="auto">
          <v-expansion-panels v-model="useStore.panelOpen" style="max-width: 400px;" position-absolute="right-0">

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
                          {{ useStore.readonly }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useStore.readonly"></v-checkbox>
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


          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
import { useMySelectActivityStore } from '~/stores/Selects/Stefan/selectActivity';

//Component Variables
const useStore = useMySelectActivityStore();
const cardId = 1; //Search card ID

//Search Button Logic
import { useSearchSelects } from '~/components/Selects/Stefan/StefanSearchSelects';
const { cards, matchesSearch } = useSearchSelects();


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