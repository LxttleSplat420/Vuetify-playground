<template>

    <!-- Styled Button -->
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
              <v-col cols="auto">
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
                <v-row style="color: #656cbe;">Co-Author/s: {{ cards[cardId].coAuthor.join(", ") }}
                </v-row>
              </div>
            </v-container>
          </v-col>
  
          <v-col align="center" class="d-flex flex-column align-center justify-start">
  
            <v-card-title class="cursor-pointer":style="{ fontSize: '34px', color: '#656cbe', fontWeight: 'bold' }"
            @click="useComponentSearchStore().searchQuery = cards[cardId].title; useComponentSearchStore().filter = 'Component Type'">
              {{ cards[cardId].title }}
            </v-card-title>
  
            <v-btn :variant="useStore.styled.variant" :elevation="useStore.styled.elevation"
              :rounded="useStore.styled.rounded"
              :color="useStore.styled.color.toLowerCase() === '' ? 'black' : useStore.styled.color.toLowerCase()"
              :flat="useStore.styled.flat" :height="useStore.styled.height"
              :width="useStore.styled.width" :style="{ backgroundColor: 'white !important' }" class="my-auto">
              {{ useStore.styled.name }}
            </v-btn>
  
            <!-- <StyledButtonComponent/> -->
  
          </v-col>
  
          <v-col cols="auto">
            <v-expansion-panels v-model="useStore.panelOpen" style="max-width: 400px;" position-absolute="right-0">
  
              <!-- Caption -->
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <template v-slot:default="{ expanded }">
                    <v-row no-gutters>
                      <v-col class="d-flex justify-start" cols="4">
                        Caption
                      </v-col>
                      <v-col class="text-grey" cols="8">
                        <v-fade-transition leave-absolute>
                          <span v-if="expanded" key="0">
                            Enter a button caption
                          </span>
                          <span v-else key="1">
                            {{ useStore.styled.name }}
                          </span>
                        </v-fade-transition>
                      </v-col>
                    </v-row>
                  </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-text-field v-model="useStore.styled.name" hide-details clearable></v-text-field>
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
                          {{ useStore.styled.variant }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-row no-gutters>
                    <v-col>
                      <v-select v-model="useStore.styled.variant" :items="useStore.variants" chips
                        flat></v-select>
                    </v-col>
                  </v-row>
  
                </v-expansion-panel-text>
              </v-expansion-panel>
  
              <!-- Elevation -->
              <v-expansion-panel :disabled="useStore.styled.flat">
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
                            {{ useStore.styled.elevation }}
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
                              <v-text-field v-model="useStore.styled.elevation" label="Elevation Amount"
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
  
              <!-- Rounded -->
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <template v-slot:default="{ expanded }">
                    <v-row no-gutters>
                      <v-col class="d-flex justify-start" cols="4">
                        Rounded amount
                      </v-col>
                      <v-col class="text-grey" cols="8">
                        <v-fade-transition leave-absolute>
                          <span v-if="expanded" key="0">
                            Set rounded amount (default = 0)
                          </span>
                          <span v-else key="1">
                            {{ useStore.styled.rounded }}
                          </span>
                        </v-fade-transition>
                      </v-col>
                    </v-row>
                  </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-row>
                    <v-col>
                      Rounded amount
                      <v-container fluid>
  
                        <v-container>
                          <v-row>
                            <v-col>
                              <v-select v-model="useStore.styled.rounded" :items="useStore.rounding" chips
                                flat></v-select>
                            </v-col>
                          </v-row>
                        </v-container>
  
                      </v-container>
                    </v-col>
  
                  </v-row>
                </v-expansion-panel-text>
  
              </v-expansion-panel>
  
              <!-- Color -->
              <v-expansion-panel>
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
                            {{ useStore.styled.color === "" ? "black" : useStore.styled.color }}
                          </span>
                        </v-fade-transition>
                      </v-col>
                    </v-row>
                  </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-text-field v-model="useStore.styled.color" placeholder="black" hide-details clearable
                    @click:clear="useStore.onClearStyled"></v-text-field>
                </v-expansion-panel-text>
              </v-expansion-panel>
  
              <!-- Flat -->
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <template v-slot:default="{ expanded }">
                    <v-row no-gutters>
                      <v-col class="d-flex justify-start" cols="4">
                        Flat
                      </v-col>
                      <v-col class="text-grey" cols="8">
                        <v-fade-transition leave-absolute>
                          <span v-if="expanded" key="0">
                            Enable/ Disable
                          </span>
                          <span v-else key="1">
                            {{ useStore.styled.flat }}
                          </span>
                        </v-fade-transition>
                      </v-col>
                    </v-row>
                  </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-checkbox v-model="useStore.styled.flat" @change="useStore.ChangeFlat"></v-checkbox>
                </v-expansion-panel-text>
              </v-expansion-panel>
  
              <!-- Size (Height and Width) -->
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <template v-slot:default="{ expanded }">
                    <v-row no-gutters>
                      <v-col class="d-flex justify-start" cols="4">
                        Adjust Size
                      </v-col>
                      <v-col class="text-grey" cols="8">
                        <v-fade-transition leave-absolute>
                          <span v-if="expanded" key="0">
                            Default: Width=100 & Height=36
                          </span>
                          <span v-else key="1">
                            Width: {{ useStore.styled.width }}, Height: {{
                              useStore.styled.height }}
                          </span>
                        </v-fade-transition>
                      </v-col>
                    </v-row>
                  </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-row>
                    <v-col>
                      <v-checkbox label="Auto Width" v-model="useStore.styled.AutoWidth"
                        @change="useStore.styledAutoWidth">
                      </v-checkbox>
                    </v-col>
                    <v-col>
                      <v-checkbox label="Auto Height" v-model="useStore.styled.AutoHeight"
                        @change="useStore.styledAutoHeight">
                      </v-checkbox>
                    </v-col>
                  </v-row>
  
                  <v-row>
                    <v-col>
                      <v-container fluid>
                        <v-container>
                          <v-row>
                            <v-col>
                              <v-text-field :disabled="useStore.styled.AutoWidth"
                                v-model="useStore.styled.width" label="Width" type="number" :min="0" persistent-hint
                                outlined width="100"></v-text-field>
                            </v-col>
                            <v-col>
                              <v-btn :disabled="useStore.styled.AutoWidth" @click="useStore.ResetWidth">Reset
                                Width</v-btn>
                            </v-col>
                          </v-row>
                        </v-container>
  
                        <v-container>
                          <v-row>
                            <v-col>
                              <v-text-field :disabled="useStore.styled.AutoHeight"
                                v-model="useStore.styled.height" label="Height" type="number" :min="0"
                                persistent-hint outlined width="100"></v-text-field>
                            </v-col>
                            <v-col>
                              <v-btn :disabled="useStore.styled.AutoHeight"
                                @click="useStore.ResetHeight">Reset
                                Height</v-btn>
                            </v-col>
                          </v-row>
                        </v-container>
  
                      </v-container>
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
  import { useMyStyledButtonStore } from '~/stores/Buttons/Alienbushman/StyledButton';
  
  //Component Variables
  const useStore = useMyStyledButtonStore();
  const cardId = 0; //Search card ID
  
  //Search Button Logic
  import { useSearchButtons } from '~/components/Buttons/Alienbushman/AlienSearchButtons.ts'; //Add card search info here
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