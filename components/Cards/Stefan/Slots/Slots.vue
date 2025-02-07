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

          <!-- Component -->
          <v-card class="mx-auto" subtitle="prepend and append" title="Avatars">
            <!-- Prepend Slot components -->
            <template v-slot:prepend v-if="useStore.prependEnable">
              <v-avatar color="blue-darken-2" v-if="useStore.prependItem.includes('mdi-alarm')">
                <v-icon icon="mdi-alarm"></v-icon>
              </v-avatar>
            </template>
            <!-- Append Slot components -->
            <template v-slot:append v-if="useStore.appendEnable">
              <v-avatar color="blue-darken-2" v-if="useStore.appendItem.includes('mdi-alarm')">
                <v-icon icon="mdi-alarm"></v-icon>
              </v-avatar>
              <v-avatar size="24" v-if="useStore.appendItem.includes('Avatar')">
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
          <!-- --------------------------------------------------------------------------------------------------------- -->
        </v-col>

        <v-col cols="auto">
          <v-expansion-panels v-model="useStore.panelOpen" style="max-width: 400px;" position-absolute="right-0">

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
                          {{ useStore.prependEnable }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useStore.prependEnable"></v-checkbox>
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
                          {{ useStore.appendEnable }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-row>
                  <v-col cols="3">
                    <v-checkbox v-model="useStore.appendEnable"></v-checkbox>
                  </v-col>
                  <v-col>
                    <v-select :items="useStore.items" v-model="useStore.appendItem" multiple
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
import { useMySlotsCardStore } from '~/stores/Cards/Stefan/SlotsCard';
import { useButtonStyleStore } from '~/stores/Buttons/Stefan/Styled';

//Component Variables
const useStore = useMySlotsCardStore();
const cardId = 2; //Search card ID

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