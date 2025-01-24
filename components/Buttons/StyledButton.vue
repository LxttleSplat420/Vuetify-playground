<template>

  <!-- Styled Button -->
  <v-card elevation="5" v-if="matchesSearch(cards[0])" color="#e9eaf5">
    <v-container fluid fill-height>
      <v-row justify="center">
        <v-col align="center" class="d-flex flex-column align-center justify-start">

          <v-card-title :style="{ fontSize: '34px', color: '#656cbe', fontWeight: 'bold' }">
            {{ cards[0].title }}
          </v-card-title>

          <v-btn :variant="useButtonStyleStore().styled.variant" :elevation="useButtonStyleStore().styled.elevation"
            :rounded="useButtonStyleStore().styled.rounded"
            :color="useButtonStyleStore().styled.color === '' ? 'black' : useButtonStyleStore().styled.color"
            :flat="useButtonStyleStore().styled.flat" :height="useButtonStyleStore().styled.height"
            :width="useButtonStyleStore().styled.width" :style="{ backgroundColor: 'white' }" class="my-auto">
            {{ useButtonStyleStore().styled.name }}
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-expansion-panels v-model="useButtonStyleStore().panelOpen" style="max-width: 400px;"
            position-absolute="right-0">

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
                          {{ useButtonStyleStore().styled.name }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-text-field v-model="useButtonStyleStore().styled.name" hide-details clearable></v-text-field>
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
                        {{ useButtonStyleStore().styled.variant }}
                      </span>
                    </v-fade-transition>
                  </v-col>
                </v-row>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-row no-gutters>
                  <v-col>
                    <v-select v-model="useButtonStyleStore().styled.variant" :items="useButtonStyleStore().variants"
                      chips flat></v-select>
                  </v-col>
                </v-row>

              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Elevation -->
            <v-expansion-panel :disabled="useButtonStyleStore().styled.flat">
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
                          {{ useButtonStyleStore().styled.elevation }}
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
                            <v-text-field v-model="useButtonStyleStore().styled.elevation" label="Elevation Amount"
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
                          {{ useButtonStyleStore().styled.rounded }}
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
                            <v-select v-model="useButtonStyleStore().styled.rounded"
                              :items="useButtonStyleStore().rounding" chips flat></v-select>
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
                          {{ useButtonStyleStore().styled.color === "" ? "black" : useButtonStyleStore().styled.color }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-text-field v-model="useButtonStyleStore().styled.color" placeholder="black" hide-details clearable
                  @click:clear="useButtonStyleStore().onClearStyled"></v-text-field>
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
                          {{ useButtonStyleStore().styled.flat }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useButtonStyleStore().styled.flat"
                  @change="useButtonStyleStore().ChangeFlat"></v-checkbox>
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
                          Width: {{ useButtonStyleStore().styled.width }}, Height: {{
                            useButtonStyleStore().styled.height }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-row>     
                  <v-col>    
                      <v-checkbox label="Auto Width" v-model="useButtonStyleStore().styled.AutoWidth"
                        @change="useButtonStyleStore().styledAutoWidth">
                      </v-checkbox>
                    </v-col>       
                    <v-col> 
                      <v-checkbox label="Auto Height" v-model="useButtonStyleStore().styled.AutoHeight"
                        @change="useButtonStyleStore().styledAutoHeight">
                      </v-checkbox>        
                    </v-col>        
              </v-row>

                <v-row>
                  <v-col>
                    <v-container fluid>
                      <v-container>
                        <v-row>
                          <v-col>
                            <v-text-field :disabled="useButtonStyleStore().styled.AutoWidth"
                              v-model="useButtonStyleStore().styled.width" label="Width" type="number" :min="0"
                              persistent-hint outlined width="100"></v-text-field>
                          </v-col>
                          <v-col>
                            <v-btn :disabled="useButtonStyleStore().styled.AutoWidth"
                              @click="useButtonStyleStore().ResetWidth">Reset Width</v-btn>
                          </v-col>
                        </v-row>
                      </v-container>

                      <v-container>
                        <v-row>
                          <v-col>
                            <v-text-field :disabled="useButtonStyleStore().styled.AutoHeight"
                              v-model="useButtonStyleStore().styled.height" label="Height" type="number" :min="0"
                              persistent-hint outlined width="100"></v-text-field>
                          </v-col>
                          <v-col>
                            <v-btn :disabled="useButtonStyleStore().styled.AutoHeight"
                              @click="useButtonStyleStore().ResetHeight">Reset Height</v-btn>
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
import { useButtonStyleStore } from '~/stores/Buttons/buttonStyle';

//Search Button Logic
import { useSearchButtons } from '~/components/Buttons/SearchButtons.ts'; 
const {cards, matchesSearch} = useSearchButtons();

</script>

<style lang="scss" scoped></style>