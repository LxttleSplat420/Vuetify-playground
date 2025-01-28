<template>

  <!-- Styled Button -->
  <v-card elevation="5" v-if="matchesSearch(cards[cardId])" color="#e9eaf5">
    <v-container fluid fill-height>
      <v-row justify="center">

        <!-- Author and Co-Author Labels -->
        <v-col cols="auto">
          <v-container class="d-flex flex-column" style="height: 100%; position: relative;">
            <v-spacer></v-spacer>
            <div style="text-align: left;">
              <v-row style="color: #656cbe;">Author: {{ cards[cardId].author }}
              </v-row>
              <v-row style="color: #656cbe;">Co-Author: {{ cards[cardId].coAuthor }}</v-row>
            </div>
          </v-container>
        </v-col>

        <v-col align="center" class="d-flex flex-column align-center justify-start">

          <v-card-title :style="{ fontSize: '34px', color: '#656cbe', fontWeight: 'bold' }">
            {{ cards[cardId].title }}
          </v-card-title>

          <v-btn :variant="useButtonStore.styled.variant" :elevation="useButtonStore.styled.elevation"
            :rounded="useButtonStore.styled.rounded"
            :color="useButtonStore.styled.color.toLowerCase() === '' ? 'black' : useButtonStore.styled.color.toLowerCase()"
            :flat="useButtonStore.styled.flat" :height="useButtonStore.styled.height"
            :width="useButtonStore.styled.width" :style="{ backgroundColor: 'white !important' }" class="my-auto">
            {{ useButtonStore.styled.name }}
          </v-btn>

          <!-- <StyledButtonComponent/> -->

        </v-col>

        <v-col cols="auto">
          <v-expansion-panels v-model="useButtonStore.panelOpen" style="max-width: 400px;" position-absolute="right-0">

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
                          {{ useButtonStore.styled.name }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-text-field v-model="useButtonStore.styled.name" hide-details clearable></v-text-field>
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
                        {{ useButtonStore.styled.variant }}
                      </span>
                    </v-fade-transition>
                  </v-col>
                </v-row>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-row no-gutters>
                  <v-col>
                    <v-select v-model="useButtonStore.styled.variant" :items="useButtonStore.variants" chips
                      flat></v-select>
                  </v-col>
                </v-row>

              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Elevation -->
            <v-expansion-panel :disabled="useButtonStore.styled.flat">
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
                          {{ useButtonStore.styled.elevation }}
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
                            <v-text-field v-model="useButtonStore.styled.elevation" label="Elevation Amount"
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
                          {{ useButtonStore.styled.rounded }}
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
                            <v-select v-model="useButtonStore.styled.rounded" :items="useButtonStore.rounding" chips
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
                          {{ useButtonStore.styled.color === "" ? "black" : useButtonStore.styled.color }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-text-field v-model="useButtonStore.styled.color" placeholder="black" hide-details clearable
                  @click:clear="useButtonStore.onClearStyled"></v-text-field>
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
                          {{ useButtonStore.styled.flat }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useButtonStore.styled.flat" @change="useButtonStore.ChangeFlat"></v-checkbox>
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
                          Width: {{ useButtonStore.styled.width }}, Height: {{
                            useButtonStore.styled.height }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-row>
                  <v-col>
                    <v-checkbox label="Auto Width" v-model="useButtonStore.styled.AutoWidth"
                      @change="useButtonStore.styledAutoWidth">
                    </v-checkbox>
                  </v-col>
                  <v-col>
                    <v-checkbox label="Auto Height" v-model="useButtonStore.styled.AutoHeight"
                      @change="useButtonStore.styledAutoHeight">
                    </v-checkbox>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-container fluid>
                      <v-container>
                        <v-row>
                          <v-col>
                            <v-text-field :disabled="useButtonStore.styled.AutoWidth"
                              v-model="useButtonStore.styled.width" label="Width" type="number" :min="0" persistent-hint
                              outlined width="100"></v-text-field>
                          </v-col>
                          <v-col>
                            <v-btn :disabled="useButtonStore.styled.AutoWidth" @click="useButtonStore.ResetWidth">Reset
                              Width</v-btn>
                          </v-col>
                        </v-row>
                      </v-container>

                      <v-container>
                        <v-row>
                          <v-col>
                            <v-text-field :disabled="useButtonStore.styled.AutoHeight"
                              v-model="useButtonStore.styled.height" label="Height" type="number" :min="0"
                              persistent-hint outlined width="100"></v-text-field>
                          </v-col>
                          <v-col>
                            <v-btn :disabled="useButtonStore.styled.AutoHeight"
                              @click="useButtonStore.ResetHeight">Reset
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
import { useButtonStyleStore } from '~/Authors/Stefan/stores/Buttons/buttonStyle';

//Component Variables
const useButtonStore = useButtonStyleStore();
const cardId = 0; //Search card ID

//Search Button Logic
import { useSearchButtons } from '~/Authors/Stefan/components/Buttons/SearchButtons';
const { cards, matchesSearch } = useSearchButtons();

</script>



<style lang="scss" scoped></style>