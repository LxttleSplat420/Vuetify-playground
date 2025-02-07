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

          <v-card text="Click me to open a Webpage!" :hover="useStore.hover"
            :href="useStore.hrefEnable === true ? useStore.href : null" rel="noopener" target="_blank"
            append-icon="mdi-open-in-new" prepend-icon="mdi-github" title="Link to a Webpage" class="mx-auto"
            width="400">

            <v-card-actions v-if="useStore.revealEnabled">
              <v-btn color="teal-accent-4" text="Learn More" variant="text" @click="useStore.reveal = true"></v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card v-if="useStore.reveal" class="position-absolute w-100" height="100%" style="bottom: 0;">
                <v-card-text class="pb-0">
                  <p class="text-h4">Enable Href to go to:</p>

                  <p class="text-medium-emphasis">
                    {{ useStore.href }}
                  </p>
                </v-card-text>

                <v-card-actions class="pt-0">
                  <v-btn color="teal-accent-4" text="Close" variant="text" @click="useStore.reveal = false"></v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>

          </v-card>
        </v-col>

        <v-col cols="auto">
          <v-expansion-panels v-model="useStore.panelOpen" style="max-width: 400px;" position-absolute="right-0">

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
                          {{ useStore.hover }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useStore.hover"></v-checkbox>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Href -->
            <v-expansion-panel width="400" :disabled="useStore.revealEnabled">
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
                          {{ useStore.hrefEnable }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useStore.hrefEnable"></v-checkbox>
                <v-text-field v-model="useStore.href" :disabled="!useStore.hrefEnable"></v-text-field>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Card Reveal -->
            <v-expansion-panel width="400" :disabled="useStore.hrefEnable">
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
                          {{ useStore.revealEnabled }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useStore.revealEnabled"></v-checkbox>
              </v-expansion-panel-text>
            </v-expansion-panel>

          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
import { useMyInteractiveCardStore } from '~/stores/Cards/Stefan/InteractiveCard';

//Component Variables
const useStore = useMyInteractiveCardStore();
const cardId = 1; //Search card ID


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