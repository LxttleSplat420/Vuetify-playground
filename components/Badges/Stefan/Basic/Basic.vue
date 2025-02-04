<template>

  <v-card elevation="5" v-if="matchesSearch(cards[cardId])" color="#e9eaf5">
    <v-container fluid fill-height>
      <v-row justify="center">

        <!-- Author and Co-Author Labels -->
        <v-col cols="auto">
          <v-container class="d-flex flex-column" style="height: 100%; position: relative;">
            <!-- Import/ Export Buttons -->
            <div>
              <v-row :style="{ color: '#656cbe', fontSize: '18px' }">
                <v-col cols="auto">
                  Export:
                </v-col>
                <v-col>
                  <v-icon size='24' @click="exportStore()">mdi-file-export-outline</v-icon>
                </v-col>
              </v-row>
              <v-row :style="{ color: '#656cbe', fontSize: '18px' }">
                <v-col cols="auto">
                  Import:
                </v-col>
                <v-col cols="auto">
                  <v-file-input label="Import" accept="application/json" @change="importStore" hide-input
                    prepend-icon="mdi-file-import-outline" class="vFileInputOpacity"></v-file-input>
                </v-col>
              </v-row>
            </div>
            <!-- ---------- -->
            <v-spacer></v-spacer>
            <div style="text-align: left;">
              <v-row style="color: #656cbe;"
                @click="useComponentSearchStore().searchQuery = cards[cardId].author; useComponentSearchStore().filter = 'Author'">Author:
                {{ cards[cardId].author }}
              </v-row>
              <v-row style="color: #656cbe;">Co-Author/s: {{ cards[cardId].coAuthor.join(", ") }}</v-row>
            </div>
          </v-container>
        </v-col>
        <!-- --------------------------------------------------------------------------------------------- -->

        <v-col align="center" class="d-flex flex-column align-center justify-start">

          <v-card-title :style="{ fontSize: '34px', color: '#656cbe', fontWeight: 'bold' }"
            @click="useComponentSearchStore().searchQuery = cards[cardId].title; useComponentSearchStore().filter = 'Component Type'">
            {{ cards[cardId].title }}
          </v-card-title>

          <v-badge :color="useStore.badgeColor" :model-value="useStore.badgeShow" :dot="useStore.badgeDot"
          :offset-x="useStore.badgeX" :offset-y="useStore.badgeY" :content="useStore.content" :location="useStore.inline ? null : useStore.location"
          :inline="useStore.inline" :floating="useStore.floating">
            <v-icon icon="$vuetify" size="x-large"></v-icon>
          </v-badge>

        </v-col>

        <v-col cols="auto">
          <v-expansion-panels v-model="useStore.panelOpen" style="max-width: 400px;" position-absolute="right-0">

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
                          Enter a color
                        </span>
                        <span v-else key="1">
                          {{ useStore.badgeColor }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-text-field label="Badge Color:" v-model="useStore.badgeColor" clearable
                  hint="Must be lowercase or Hexadecimal (#69F0AE)" placeholder="undefined" persistent-placeholder
                  persistent-hint></v-text-field>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <!-- ----------------------------------------------------------------------------- -->

            <!-- Display -->
            <v-expansion-panel width="400">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Display
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Edit Badge properties
                        </span>
                        <span v-else key="1">
                          {{ "X-Offset: " + useStore.badgeX + "; Y-Offset: " + useStore.badgeY }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-row>
                  <v-col cols="auto">
                    <v-checkbox v-model="useStore.badgeShow" label="Show Badge"></v-checkbox>
                  </v-col>
                  <v-col>
                    <v-checkbox v-model="useStore.badgeDot" label="Dot Badge"></v-checkbox>
                  </v-col>
                </v-row>

                <v-text-field v-model="useStore.badgeY" label="Badge Y-offset" type="number" :min="0"
                   outlined clearable
                  @click:clear="useStore.badgeY = 0"
                  hint="Check if Location/ Inline allows offset (Ex. Location = 'Top End' will allow both X and Y Offsets)"></v-text-field>
                  <v-text-field v-model="useStore.badgeX" label="Badge X-offset" type="number" :min="0"
                   outlined clearable
                  @click:clear="useStore.badgeX = 0"
                  hint="Check if Location/ Inline allows offset (Ex. Location = 'Top End' will allow both X and Y Offsets)"></v-text-field>
                <v-text-field :disabled="useStore.badgeDot" label="Badge Content:" v-model="useStore.content"
                  clearable></v-text-field>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <!-- ----------------------------------------------------------------------------- -->

            <!-- Location -->
            <v-expansion-panel width="400">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Location
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Select a Location
                        </span>
                        <span v-else key="1">
                          {{ useStore.inline ? "Inline" : useStore.location + '; Floating: ' + useStore.floating }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-select :disabled="useStore.inline"
                  :items="useStore.locations"
                  v-model="useStore.location" 
                  label="Badge Location:"
                  hint="Might Override X/ Y-offsets"
                  persistent-hint
                ></v-select>
                <v-checkbox label="Inline" v-model="useStore.inline" :disabled="useStore.floating"></v-checkbox>
                <v-checkbox label="Floating" v-model="useStore.floating" :disabled="useStore.inline"></v-checkbox>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <!-- ----------------------------------------------------------------------------- -->

          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

</template>

<script setup>
import { useMyStefanBasicBadgeStore } from '~/stores/Badges/Stefan/StefanBasicBadge'; //Remember to change { useMyAuthorTypeStore } to the correct store name

//Component Variables
const useStore = useMyStefanBasicBadgeStore(); //Remember to change useMyAuthorTypeStore() to the same name as the import in { } above
const cardId = 0; //Set the search card ID for title and author names etc. (Found in useSearchBaseComponents cards)

//Search Button Logic
import { useSearchBadges } from '~/components/Badges/Stefan/StefanSearchBadges';
const { cards, matchesSearch } = useSearchBadges(); ////Remember to change useSearchBaseComponents() to the same name as the import in { } above

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