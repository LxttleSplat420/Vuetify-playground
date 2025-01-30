<template>

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
              <v-row style="color: #656cbe;">Co-Author/s: {{ cards[cardId].coAuthor.join(", ") }}</v-row>
            </div>
          </v-container>
        </v-col>
        <!-- --------------------------------------------------------------------------------------------- -->

        <v-col align="center" class="d-flex flex-column align-center justify-start">

          <v-card-title :style="{ fontSize: '34px', color: '#656cbe', fontWeight: 'bold' }">
            {{ cards[cardId].title }}
          </v-card-title>

          <!-- Tooltip -->
          <v-tooltip  v-bind="(useStore.tooltipAlwaysShow || useStore.panelOpen === 3) ? { modelValue: true, 'onUpdate:modelValue': () => {} } : {}" 
            :location="useStore.tooltipPosition" 
            :open-delay="useStore.tooltipOpenDelay" :close-delay="useStore.tooltipCloseDelay">
            <template v-slot:activator="{ props }">

              <!-- Badge -->
               <v-badge left :color="useStore.badgeColor" location="top" :model-value="useStore.badgeShow"
                :content="useStore.badgeContent"
                :dot="useStore.badgeDot" 
               >
                <span slot="badge" ></span> <!--slot can be any component-->
                <v-icon large color="primary">icon</v-icon>
              

              <!-- Switch -->
              <v-switch v-bind="props" :inset="useStore.inset" :model-value="true"
                :true-icon="useStore.iconOn" :false-icon="useStore.iconOff" :color="useStore.color">
                <template v-slot:label>
                  {{useStore.label}}
                </template>
                
              </v-switch>
              <!-- ----------------------Switch end------------------------- -->
            </v-badge>
            <!-- ------------------------Badge end-------------------------- -->

            </template>
            <!-- V-card in Tooltip -->
            <v-card :title="useStore.tooltipTitle" :subtitle="useStore.tooltipSubtitle" :text="useStore.tooltipText">

            </v-card>
            <!-- ------------------V-card in Tooltip end-------------------- -->

          </v-tooltip>
          <!-- -----------------------------------Tooltip End--------------------------------------------- -->


        </v-col>

        <v-col cols="auto">
          <v-expansion-panels v-model="useStore.panelOpen" style="max-width: 400px;" position-absolute="right-0">

            <!-- Label -->
            <v-expansion-panel width="400">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Label
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Enter a label Caption
                        </span>
                        <span v-else key="1">
                          {{ useStore.label }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-text-field v-model="useStore.label" clearable></v-text-field>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <!-- ----------------------------------------------------------------------------- -->
             

            <!-- Inset -->
            <v-expansion-panel width="400">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Inset
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Enable/ Disable
                        </span>
                        <span v-else key="1">
                          {{ useStore.inset }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox v-model="useStore.inset"></v-checkbox>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <!-- ----------------------------------------------------------------------------- -->

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
                          Enter a Color
                        </span>
                        <span v-else key="1">
                          {{ useStore.color }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-text-field v-model="useStore.color" clearable
                hint="Must be lowercase or Hexadecimal (#69F0AE)"
                  placeholder="undefined"
                  persistent-placeholder
                  persistent-hint></v-text-field>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <!-- ----------------------------------------------------------------------------- -->

            <!-- Icons -->
            <v-expansion-panel width="400">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Icons
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Enter a Icon name to use when:
                        </span>
                        <span v-else key="1">
                          <div>
                            <p>On: {{ useStore.iconOn }}</p>
                            <p>Inset On: {{ useStore.iconInsetOn }}</p>
                            <p>Off: {{ useStore.iconOff }}</p>
                          </div>
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-text-field v-model="useStore.iconOn" label="Switched On Icon:" clearable></v-text-field>
                <v-text-field v-model="useStore.iconInsetOn" label="Switch On Inset Icon:" clearable></v-text-field>
                <v-text-field v-model="useStore.iconOff" label="Switched Off Icon:" clearable></v-text-field>

              </v-expansion-panel-text>
            </v-expansion-panel>
            <!-- ----------------------------------------------------------------------------- -->

            <!-- Tooltip Info -->
            <v-expansion-panel width="400">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Tooltip Info
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Enter Tooltip Info
                        </span>
                        <span v-else key="1">
                          {{ useStore.tooltipTitle }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>                
                <v-text-field v-model="useStore.tooltipTitle" clearable label="Title"></v-text-field>
                <v-text-field v-model="useStore.tooltipSubtitle" clearable label="Subtitle"></v-text-field>
                <v-text-field v-model="useStore.tooltipText" clearable label="Text"></v-text-field>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <!-- ----------------------------------------------------------------------------- -->

            <!-- Tooltip Display -->
            <v-expansion-panel width="400">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Tooltip Display
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Edit Tooltip Display Delays
                        </span>
                        <span v-else key="1">
                          {{ useStore.tooltipTitle }}
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox label="Always Show Tooltip" v-model="useStore.tooltipAlwaysShow"></v-checkbox>
                <v-select
                  :items="useStore.tooltipPositions"
                  v-model="useStore.tooltipPosition"
                  label="Tooltip Location"
                ></v-select>
                <v-text-field v-model="useStore.tooltipOpenDelay" label="Open Delay (ms):" type="number" :min="0"
                  hint="Hover time required before tooltip opens" persistent-hint outlined
                   :disabled="useStore.tooltipAlwaysShow" clearable @click:clear="useStore.tooltipOpenDelay = 0"></v-text-field>
                  <v-text-field v-model="useStore.tooltipCloseDelay" label="Open Delay (ms):" type="number" :min="0"
                  hint="Time it takes for tooltip to disappear" persistent-hint outlined
                   :disabled="useStore.tooltipAlwaysShow" clearable @click:clear="useStore.tooltipCloseDelay = 0"></v-text-field>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <!-- ----------------------------------------------------------------------------- -->

             <!-- Badge -->
             <v-expansion-panel width="400">
              <v-expansion-panel-title>
                <template v-slot:default="{ expanded }">
                  <v-row no-gutters>
                    <v-col class="d-flex justify-start" cols="4">
                      Badge
                    </v-col>
                    <v-col class="text-grey" cols="8">
                      <v-fade-transition leave-absolute>
                        <span v-if="expanded" key="0">
                          Edit Badge properties
                        </span>
                        <span v-else key="1">
                          {{ useStore.inset }}
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
              
                <v-text-field
                  label="Badge Color:"
                  v-model="useStore.badgeColor"
                  clearable
                  hint="Must be lowercase or Hexadecimal (#69F0AE)"
                  placeholder="undefined"
                  persistent-placeholder
                  persistent-hint
                ></v-text-field>
                <v-text-field :disabled="useStore.badgeDot"
                  label="Badge Content:"
                  v-model="useStore.badgeContent"
                  clearable
                ></v-text-field>
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
import { useMyStefanComplexSwitchStore } from '~/stores/Switches/Stefan/StefanComplexSwitch.ts'; //Remember to change { useMyAuthorTypeStore } to the correct store name

//Component Variables
const useStore = useMyStefanComplexSwitchStore(); //Remember to change useMyAuthorTypeStore() to the same name as the import in { } above
const cardId = 0; //Set the search card ID for title and author names etc. (Found in useSearchBaseComponents cards)

//Search Button Logic
import { useSearchSwitches } from '~/components/Switches/Stefan/StefanSearchSwitches';
const { cards, matchesSearch } = useSearchSwitches(); ////Remember to change useSearchBaseComponents() to the same name as the import in { } above

</script>



<style lang="scss" scoped></style>