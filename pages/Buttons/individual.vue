<script setup>
import { useButtonStyleStore } from '~/stores/buttonStyle'
import { useButtonActivityStore } from '~/stores/buttonActivity'

const buttonStyleStore = useButtonStyleStore()

const ResetWidth = () => {
  buttonStyleStore.styled.width = 100
}

const ResetHeight = () => {
  buttonStyleStore.styled.height = 36
}

const ChangeFlat = () => {
  if (buttonStyleStore.styled.flat) {
    buttonStyleStore.prevStyledElevation = buttonStyleStore.styled.elevation
    buttonStyleStore.styled.elevation = 0
  } else {
    buttonStyleStore.styled.elevation = buttonStyleStore.prevStyledElevation
  }
}

const onClearStyled = () => {
  buttonStyleStore.styled.color = 'black'
}

const styledAutoWidth = () => {
  if (buttonStyleStore.styled.AutoWidth) {
    buttonStyleStore.styled.prevWidth = buttonStyleStore.styled.width
    buttonStyleStore.styled.width = 'auto'
  } else {
    buttonStyleStore.styled.width = buttonStyleStore.styled.prevWidth
  }
}

const styledAutoHeight = () => {
  if (buttonStyleStore.styled.AutoHeight) {
    buttonStyleStore.styled.prevHeight = buttonStyleStore.styled.height
    buttonStyleStore.styled.height = 'auto'
  } else {
    buttonStyleStore.styled.height = buttonStyleStore.styled.prevHeight
  }
}

definePageMeta({
  layout: 'navigationbar',
})
</script>


<template>
  <!-- Styled Button Code -->
   <v-card>
  <v-container fluid fill-height>
    <v-row align="center">
      <v-col align="center">
        <v-btn 
        :variant="useButtonStyleStore().styled.variant" 
        :elevation="useButtonStyleStore().styled.elevation"
        :rounded="useButtonStyleStore().styled.rounded"
        :color="useButtonStyleStore().styled.color"
        :flat="useButtonStyleStore().styled.flat"
        :height="useButtonStyleStore().styled.height"
        :width="useButtonStyleStore().styled.width"        
        >
          {{ useButtonStyleStore().styled.name }}
        </v-btn>
      </v-col>
    
    <v-col cols="auto">
      <v-expansion-panels v-model="useButtonStyleStore().panelOpen" style="max-width: 400px;" position-absolute = "right-0">

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
            <v-select v-model="useButtonStyleStore().styled.variant" :items="useButtonStyleStore().variants" variant="elevated" chips flat></v-select>
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
        <v-col >
            Elevated amount
            <v-container fluid>
              
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="useButtonStyleStore().styled.elevation"
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
                  {{ useButtonStyleStore().styled.rounded }}
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
                <v-select v-model="useButtonStyleStore().styled.rounded" :items="useButtonStyleStore().rounding" variant="elevated" chips flat></v-select>
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
                  {{ useButtonStyleStore().styled.color }}
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-text-field v-model="useButtonStyleStore().styled.color" placeholder="black" hide-details clearable @click:clear="onClearStyled"></v-text-field>
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
        <v-checkbox
        v-model="useButtonStyleStore().styled.flat"
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
              v-model="useButtonStyleStore().styled.AutoWidth"
              @change="styledAutoWidth">                                            
            </v-checkbox>
            <v-checkbox label="Auto Height"
              v-model="useButtonStyleStore().styled.AutoHeight"
              @change="styledAutoHeight">                                            
            </v-checkbox>
            </v-col>
            <v-col class="text-grey" cols="8">
              <v-fade-transition leave-absolute>
                <span v-if="expanded" key="0">
                  Default Width = 100, Height = 36
                </span>
                <span v-else key="1">
                  Width: {{ useButtonStyleStore().styled.width }}, Height: {{ useButtonStyleStore().styled.height }}
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
                  :disabled="useButtonStyleStore().styled.AutoWidth"
                  v-model="useButtonStyleStore().styled.width"
                  label="Width"
                  type="number"
                  :min="0"
                  persistent-hint
                  outlined
                  width="100"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-btn :disabled="useButtonStyleStore().styled.AutoWidth" @click="ResetWidth" >Reset Width</v-btn>
              </v-col>
            </v-row>
          </v-container>
                
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  :disabled="useButtonStyleStore().styled.AutoHeight"
                  v-model="useButtonStyleStore().styled.height"
                  label="Height"
                  type="number"
                  :min="0"
                  persistent-hint
                  outlined
                  width="100"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-btn :disabled="useButtonStyleStore().styled.AutoHeight" @click="ResetHeight" >Reset Height</v-btn>
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

 <!-- Activity Button Code -->
 

</template>

<style lang="scss" scoped></style>