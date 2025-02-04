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
        <!-- --------------------------------------------------------------------------------------------- -->

        <v-col align="center" class="d-flex flex-column align-center justify-start">

          <v-card-title :style="{ fontSize: '34px', color: '#656cbe', fontWeight: 'bold' }">
            {{ cards[cardId].title }}
          </v-card-title>

          <!-- Tooltip -->
          <v-tooltip
            v-bind="(useStore.tooltipAlwaysShow || useStore.panelOpen === 4) ? { modelValue: true, 'onUpdate:modelValue': () => { } } : {}"
            :location="useStore.tooltipPosition" :open-delay="useStore.tooltipOpenDelay"
            :close-delay="useStore.tooltipCloseDelay">
            <template v-slot:activator="{ props }">

              <!-- Badge -->
              <v-badge :color="useStore.badgeColor" :model-value="useStore.badgeShow" :dot="useStore.badgeDot"
                :offset-x="useStore.badgeX" :offset-y="useStore.badgeY">
                <!-- Badge Slot Content -->
                <template v-slot:badge>{{ useStore.badgeContent }} </template>
                <!-- ----------- -->

                <!-- Switch -->
                <span>
                  <v-switch v-bind="props" :inset="useStore.inset" v-model="useStore.switchOn"
                    :true-icon="useStore.thumbIconOn" :false-icon="useStore.thumbIconOff"
                    :color="useStore.sliderColorOn" :base-color="useStore.sliderColorOff" :style="{
                      '--v-switch-thumb-background': useStore.switchOn ? useStore.thumbColorBackgroundOn : useStore.thumbColorBackgroundOff,
                      '--v-switch-thumb-color': useStore.switchOn ? useStore.thumbColorIconOn : useStore.thumbColorIconOff,
                      '--v-switch-track-after-content': `'\\${useStore.trackIconOn}'`,
                      '--v-switch-track-after-color' : useStore.trackColorIconOn,
                      '--v-switch-track-before-content': `'\\${useStore.trackIconOff}'`,
                      '--v-switch-track-before-color' : useStore.trackColorIconOff,
                    }">

                    <!-- Switch Slot Label -->
                    <template v-slot:label>
                      {{ useStore.label }}
                    </template>
                    <!-- ------------ -->
                    <template v-slot:track>defaultcontent</template>


                  </v-switch>
                </span>

                <!-- ----------------------Switch end------------------------- -->



              </v-badge>
              <!-- ------------------------Badge end-------------------------- -->



            </template>
            <!-- V-card in Tooltip -->
            <v-card variant="tonal">

              <template v-slot:title>
                {{ useStore.tooltipTitle }}
                <v-icon :icon="useStore.tooltipTitleIconAppended" location="end"></v-icon>
              </template>

              <template v-slot:subtitle>
                {{ useStore.tooltipSubtitle }}
              </template>

              <v-card-text>
                {{ useStore.tooltipText }}
              </v-card-text>

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
                          Must be lowercase or Hexadecimal (#69F0AE)
                        </span>
                        <span v-else key="1">
                          Slider, thumb and icons
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-text-field v-model="useStore.sliderColorOn" clearable label="Slider On"
                   placeholder="undefined" persistent-placeholder
                  ></v-text-field>
                <v-text-field v-model="useStore.sliderColorOff" clearable label="Slider Off"
                   placeholder="undefined" persistent-placeholder
                  ></v-text-field>
                <v-text-field v-model="useStore.thumbColorBackgroundOn" clearable label="Thumb Background On"
                   placeholder="undefined" persistent-placeholder
                  ></v-text-field>
                  <v-text-field v-model="useStore.thumbColorBackgroundOff" clearable label="Thumb Background Off"
                   placeholder="undefined" persistent-placeholder
                  ></v-text-field>
                <v-text-field v-model="useStore.thumbColorIconOn" clearable label="Thumb Icon On"
                  placeholder="undefined" persistent-placeholder
                  ></v-text-field>                
                <v-text-field v-model="useStore.thumbColorIconOff" clearable label="Thumb Icon Off"
                  placeholder="undefined" persistent-placeholder
                  ></v-text-field>
                <v-text-field v-model="useStore.trackColorIconOn" clearable label="Track Icon On"
                   placeholder="undefined" persistent-placeholder
                  ></v-text-field>                
                <v-text-field v-model="useStore.trackColorIconOff" clearable label="Track Icon Off"
                   placeholder="undefined" persistent-placeholder
                  ></v-text-field>
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
                          Enter a Icon name or Unicode (Check Hints):
                        </span>
                        <span v-else key="1">
                          <div>
                            <p>Track On: {{ useStore.trackIconOn }}</p>
                            <p>Track Off: {{ useStore.trackIconOff }}</p>
                            <p>Thumb On: {{ useStore.thumbIconOn }}</p>
                            <p>Thumb Off: {{ useStore.thumbIconOff }}</p>
                          </div>
                        </span>
                      </v-fade-transition>
                    </v-col>
                  </v-row>
                </template>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-text-field v-model="useStore.thumbIconOn" label="Thumb On:" clearable
                  hint="Must be mdi-iconName (mdi-magnify)"></v-text-field>
                <v-text-field v-model="useStore.thumbIconOff" label="Thumb Off:" clearable
                  hint="Must be mdi-iconName (mdi-magnify)"></v-text-field>
                <v-text-field v-model="useStore.trackIconOn" label="Track On:" clearable
                  hint="Must be mdi Unicode number (F0349)"></v-text-field>
                <v-text-field v-model="useStore.trackIconOff" label="Track 0ff:" clearable
                  hint="Must be mdi Unicode number (F0349)"></v-text-field>
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
                <v-text-field v-model="useStore.tooltipTitleIconAppended" label="Tooltip Title Icon (Appended):" clearable
                  hint="Must be mdi-iconName (mdi-magnify)"></v-text-field>
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
                <v-select :items="useStore.tooltipPositions" v-model="useStore.tooltipPosition"
                  label="Tooltip Location"></v-select>
                <v-text-field v-model="useStore.tooltipOpenDelay" label="Open Delay (ms):" type="number" :min="0"
                  hint="Hover time required before tooltip opens" persistent-hint outlined
                  :disabled="useStore.tooltipAlwaysShow" clearable
                  @click:clear="useStore.tooltipOpenDelay = 0"></v-text-field>
                <v-text-field v-model="useStore.tooltipCloseDelay" label="Open Delay (ms):" type="number" :min="0"
                  hint="Time it takes for tooltip to disappear" persistent-hint outlined
                  :disabled="useStore.tooltipAlwaysShow" clearable
                  @click:clear="useStore.tooltipCloseDelay = 0"></v-text-field>
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

                <v-text-field v-model="useStore.badgeY" label="Badge Y-offset" type="number" :min="0"
                  hint="Y-Offset = 10 recommended" persistent-hint outlined clearable
                  @click:clear="useStore.badgeY = 0"></v-text-field>
                  <v-text-field v-model="useStore.badgeX" label="Badge X-offset" type="number" :min="0"
                  hint="X-Offset = 50 Approx." persistent-hint outlined clearable
                  @click:clear="useStore.badgeX = 0"></v-text-field>

                <v-text-field label="Badge Color:" v-model="useStore.badgeColor" clearable
                  hint="Must be lowercase or Hexadecimal (#69F0AE)" placeholder="undefined" persistent-placeholder
                  persistent-hint></v-text-field>
                <v-text-field :disabled="useStore.badgeDot" label="Badge Content:" v-model="useStore.badgeContent"
                  clearable></v-text-field>
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

<style lang="scss" scoped>


:deep(.v-switch__thumb) {
  background-color: var(--v-switch-thumb-background) !important;
  /* Dynamically apply thumb color */
  color: var(--v-switch-thumb-color) !important;
}

:deep(.v-switch__track::after) {
  content: var(--v-switch-track-after-content) !important; // Unicode for mdi icon
  font-family: 'Material Design Icons';
  color: var(--v-switch-track-after-color);
  font-size: 16px;
  position: absolute;
  left: 5px;
}


:deep(.v-switch__track::before) {
  content: var(--v-switch-track-before-content); // Unicode for mdi icon
  font-family: 'Material Design Icons';
  color: var(--v-switch-track-before-color);
  font-size: 16px;
  position: absolute;
  right: 5px;
}
</style>