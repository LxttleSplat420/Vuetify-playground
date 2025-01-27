 <template>    
    <v-card elevation="5" v-if="matchesSearch(cards[0])" color="#e9eaf5">
      <v-container fluid fill-height>
        <v-row justify="center">
          <v-col align="center" class="d-flex flex-column align-center justify-start">

            <v-card-title :style="{ fontSize: '34px', color: '#656cbe', fontWeight: 'bold' }">
              {{ cards[0].title }}
            </v-card-title>

            <v-select
            :label="useMySelectStyledStore().label"
            :items="useMySelectStyledStore().items"
            :variant="useMySelectStyledStore().variant"
            :clearable="useMySelectStyledStore().clearable"
            :multiple="useMySelectStyledStore().multiple"
            :chips="useMySelectStyledStore().chips"
            width="500"
            >
            </v-select>
          </v-col>

          <v-col cols="auto">
            <v-expansion-panels v-model="useMySelectStyledStore().panelOpen" style="max-width: 400px;"
              position-absolute="right-0">

              <!-- Label -->
              <v-expansion-panel style="width: 400px;">
                <v-expansion-panel-title>
                  <template v-slot:default="{ expanded }">
                    <v-row no-gutters>
                      <v-col class="d-flex justify-start" cols="4">
                        Label
                      </v-col>
                      <v-col class="text-grey" cols="8">
                        <v-fade-transition leave-absolute>
                          <span v-if="expanded" key="0">
                            Enter a label
                          </span>
                          <span v-else key="1">
                            {{ useMySelectStyledStore().label }}
                          </span>
                        </v-fade-transition>
                      </v-col>
                    </v-row>
                  </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-text-field
                  v-model="useMySelectStyledStore().label" hide-details clearable
                  ></v-text-field>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <!-- Variant -->
              <v-expansion-panel style="width: 400px;">
                <v-expansion-panel-title>
                  <template v-slot:default="{ expanded }">
                    <v-row no-gutters>
                      <v-col class="d-flex justify-start" cols="4">
                        Variant
                      </v-col>
                      <v-col class="text-grey" cols="8">
                        <v-fade-transition leave-absolute>
                          <span v-if="expanded" key="0">
                            Select a Variant
                          </span>
                          <span v-else key="1">
                            {{ useMySelectStyledStore().variant }}
                          </span>
                        </v-fade-transition>
                      </v-col>
                    </v-row>
                  </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-select
                    :items="useMySelectStyledStore().variants"
                    v-model="useMySelectStyledStore().variant"
                    label="Variant type:"
                  ></v-select>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <!-- Clearable -->
              <v-expansion-panel style="width: 400px;">
                <v-expansion-panel-title>
                  <template v-slot:default="{ expanded }">
                    <v-row no-gutters>
                      <v-col class="d-flex justify-start" cols="4">
                        Clearable
                      </v-col>
                      <v-col class="text-grey" cols="8">
                        <v-fade-transition leave-absolute>
                          <span v-if="expanded" key="0">
                            Enable/ Disable
                          </span>
                          <span v-else key="1">
                            {{ useMySelectStyledStore().clearable }}
                          </span>
                        </v-fade-transition>
                      </v-col>
                    </v-row>
                  </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-checkbox  v-model="useMySelectStyledStore().clearable"></v-checkbox>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <!-- Multiple -->
              <v-expansion-panel style="width: 400px;">
                <v-expansion-panel-title>
                  <template v-slot:default="{ expanded }">
                    <v-row no-gutters>
                      <v-col class="d-flex justify-start" cols="4">
                        Multiple
                      </v-col>
                      <v-col class="text-grey" cols="8">
                        <v-fade-transition leave-absolute>
                          <span v-if="expanded" key="0">
                            Enable/ Disable (Multiple items can be selected)
                          </span>
                          <span v-else key="1">
                            {{ useMySelectStyledStore().multiple }}
                          </span>
                        </v-fade-transition>
                      </v-col>
                    </v-row>
                  </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-checkbox v-model="useMySelectStyledStore().multiple"></v-checkbox>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <!-- Chips -->
              <v-expansion-panel style="width: 400px;">
                <v-expansion-panel-title>
                  <template v-slot:default="{ expanded }">
                    <v-row no-gutters>
                      <v-col class="d-flex justify-start" cols="4">
                        Chips
                      </v-col>
                      <v-col class="text-grey" cols="8">
                        <v-fade-transition leave-absolute>
                          <span v-if="expanded" key="0">
                            Enable/ Disable
                          </span>
                          <span v-else key="1">
                            {{ useMySelectStyledStore().chips }}
                          </span>
                        </v-fade-transition>
                      </v-col>
                    </v-row>
                  </template>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-checkbox v-model="useMySelectStyledStore().chips"></v-checkbox>
                </v-expansion-panel-text>
              </v-expansion-panel>
              
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
</template>

<script setup>
import { useMySelectStyledStore } from '~/stores/Selects/selectStyled';

//Search Button Logic
import { useSearchSelects} from '~/components/Selects/SearchSelects.ts';
const { cards, matchesSearch } = useSearchSelects();


</script>

<style></style>