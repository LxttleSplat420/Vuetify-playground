<script>
import { th } from 'vuetify/locale';

//import PromptSelection from '@/pages/Buttons/components/PromptSelection.vue';
export default {
  data: () => ({
    styled: {
      name: 'Styled',
      variant: 'outlined',
      start: null,
      end: null,
      elevation: 2,
      rounded: "0",
      color: "black",
      flat: false,
      height: "36",
      width: "100",
      AutoWidth: false,
      AutoHeight: false,
      prevHeight: "36",
      prevWidth: "100",
    },
    variants: ['text', 'flat', 'tonal', 'outlined', 'plain'],
    rounding: ['0', 'xs', 'sm', 'true', 'lg', 'xl', 'pill', 'circle', 'shaped'],
    prevStyledElevation: 0,
    panelOpen: null,
    
  }),
  methods: {
    ResetWidth(){
      this.styled.width = 100;
    },
    ResetHeight(){
      this.styled.height = 36;
    },
    ChangeFlat(){
      if (this.styled.flat) {
        this.prevStyledElevation = this.styled.elevation;
        this.styled.elevation = 0;
      }
      else {
        this.styled.elevation = this.prevStyledElevation;
      }
    },
    onClearStyled(){
      this.styled.color = "black";
    },
    styledAutoWidth(){

      if (this.styled.AutoWidth){
        this.styled.prevWidth = this.styled.width;

        this.styled.width = "auto";
      } else 
      {
        this.styled.width = this.styled.prevWidth;}
    },
    styledAutoHeight(){

      if (this.styled.AutoHeight){
        this.styled.prevHeight = this.styled.height;

        this.styled.height = "auto";
      } else 
      {
        this.styled.height = this.styled.prevHeight;}
    },
  },
}


definePageMeta({
  layout: 'navigationbar'
})

</script>

<template>
  <!-- Styled Button Code -->
  <v-container fluid fill-height>
    <v-row align="center">
      <v-col align="center">
        <v-btn 
        ref="btnStyled"
        :variant="useButtonStyleStore().styled.variant" 
        :elevation="styled.elevation"
        :rounded="styled.rounded"
        :color="styled.color"
        :flat="styled.flat"
        :height="styled.height"
        :width="styled.width"        
        >
          {{ styled.name }}
        </v-btn>
      </v-col>
    
    <v-col cols="auto">
      <v-expansion-panels v-model="panelOpen" style="max-width: 400px;" position-absolute = "right-0">
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
                  {{ styled.name }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-text-field v-model="styled.name" hide-details clearable></v-text-field>
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
                {{ styled.variant }}
              </span>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-row no-gutters>
          <v-col>
            <v-select v-model="styled.variant" :items="variants" variant="elevated" chips flat></v-select>
          </v-col>
        </v-row>

      </v-expansion-panel-text>
    </v-expansion-panel>

    <!-- Elevation -->
    <v-expansion-panel :disabled="styled.flat">
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
                  {{ styled.elevation }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-row>    
        <v-col >
            Elevated amount
            <v-container fluid>
              
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="styled.elevation"
                  label="Elevation Amount"
                  type="number"
                  :min="0"
                  :max="24"
                  hint="Between 0 and 24 (default = 2)"
                  persistent-hint
                  outlined
                  width="220"
                ></v-text-field>
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
                  {{ styled.rounded }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-row>    
        <v-col >
            Rounded amount
            <v-container fluid>
              
          <v-container>
            <v-row>
              <v-col>
                <v-select v-model="styled.rounded" :items="rounding" variant="elevated" chips flat></v-select>
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
                  {{ styled.color }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-text-field v-model="styled.color" placeholder="black" hide-details clearable @click:clear="onClearStyled"></v-text-field>
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
                  {{ styled.flat }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-checkbox
        v-model="styled.flat"
        @change="ChangeFlat"
        ></v-checkbox>
      </v-expansion-panel-text>
    </v-expansion-panel>

    <!-- Size (Height and Width) -->
    <v-expansion-panel>
      <v-expansion-panel-title>
        <template v-slot:default="{ expanded }">          
          <v-row no-gutters>
            <v-col>
              <v-checkbox label="Auto Width"
              v-model="styled.AutoWidth"
              @change="styledAutoWidth">                                            
            </v-checkbox>
            <v-checkbox label="Auto Height"
              v-model="styled.AutoHeight"
              @change="styledAutoHeight">                                            
            </v-checkbox>
            </v-col>
            <v-col class="text-grey" cols="8">
              <v-fade-transition leave-absolute>
                <span v-if="expanded" key="0">
                  Default Width = 100, Height = 36
                </span>
                <span v-else key="1">
                  Width: {{ styled.width }}, Height: {{ styled.height }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>        
        <v-row>    
        <v-col >            
            <v-container fluid>              
          <v-container>
            <v-row>              
              <v-col>
                <v-text-field
                  :disabled="styled.AutoWidth"
                  v-model="styled.width"
                  label="Width"
                  type="number"
                  :min="0"
                  persistent-hint
                  outlined
                  width="100"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-btn :disabled="styled.AutoWidth" @click="ResetWidth" >Reset Width</v-btn>
              </v-col>
            </v-row>
          </v-container>
                
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  :disabled="styled.AutoHeight"
                  v-model="styled.height"
                  label="Height"
                  type="number"
                  :min="0"
                  persistent-hint
                  outlined
                  width="100"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-btn :disabled="styled.AutoHeight" @click="ResetHeight" >Reset Height</v-btn>
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
  

</template>

<style lang="scss" scoped></style>