<template>
  <!-- Activity Button -->
  <v-card elevation="5" v-if="matchesSearch(cards[1])" color="#e9eaf5">
   
   <v-container fluid fill-height>
     <v-row  justify="center">
       <v-col align="center" class="d-flex flex-column align-center justify-start">     
         
         <v-card-title :style="{ fontSize: '34px', color: '#656cbe', fontWeight: 'bold'}">
           {{ cards[1].title }}
         </v-card-title>

         <v-btn :active="useButtonActivityStore().active" :disabled="useButtonActivityStore().disabled"
           :loading="useButtonActivityStore().loading !== 'false' ? useButtonActivityStore().loading : false"
           :ripple="useButtonActivityStore().ripple === 'false' ? false : { class: 'text-' + useButtonActivityStore().ripple }"
           class="my-auto">
           {{ cards[1].title }} Button
         </v-btn>
       </v-col>

       <v-col cols="auto">
         <v-expansion-panels v-model="useButtonActivityStore().panelOpen" style="max-width: 400px;"
           position-absolute="right-0">

           <!-- Active -->
           <v-expansion-panel style="width: 400px;">
             <v-expansion-panel-title>
               <template v-slot:default="{ expanded }">
                 <v-row no-gutters>
                   <v-col class="d-flex justify-start" cols="4">
                     Active
                   </v-col>
                   <v-col class="text-grey" cols="8">
                     <v-fade-transition leave-absolute>
                       <span v-if="expanded" key="0">
                         Enable/ Disable
                       </span>
                       <span v-else key="1">
                         {{ useButtonActivityStore().active }}
                       </span>
                     </v-fade-transition>
                   </v-col>
                 </v-row>
               </template>
             </v-expansion-panel-title>
             <v-expansion-panel-text>
               <v-checkbox v-model="useButtonActivityStore().active"></v-checkbox>
             </v-expansion-panel-text>
           </v-expansion-panel>

           <!-- Disabled -->
           <v-expansion-panel style="width: 400px;">
             <v-expansion-panel-title>
               <template v-slot:default="{ expanded }">
                 <v-row no-gutters>
                   <v-col class="d-flex justify-start" cols="4">
                     Disabled
                   </v-col>
                   <v-col class="text-grey" cols="8">
                     <v-fade-transition leave-absolute>
                       <span v-if="expanded" key="0">
                         Enable/ Disable
                       </span>
                       <span v-else key="1">
                         {{ useButtonActivityStore().disabled }}
                       </span>
                     </v-fade-transition>
                   </v-col>
                 </v-row>
               </template>
             </v-expansion-panel-title>
             <v-expansion-panel-text>
               <v-checkbox v-model="useButtonActivityStore().disabled"></v-checkbox>
             </v-expansion-panel-text>
           </v-expansion-panel>

           <!-- Loading -->
           <v-expansion-panel>
             <v-expansion-panel-title>
               <template v-slot:default="{ expanded }">
                 <v-row no-gutters>
                   <v-col class="d-flex justify-start" cols="4">
                     Loading bar
                   </v-col>
                   <v-col class="text-grey" cols="8">
                     <v-fade-transition leave-absolute>
                       <span v-if="expanded" key="0">
                         Enable/ Disable and set a color
                       </span>
                       <span v-else key="1">
                         {{ useButtonActivityStore().loading }}
                       </span>
                     </v-fade-transition>
                   </v-col>
                 </v-row>
               </template>
             </v-expansion-panel-title>
             <v-expansion-panel-text>
               <v-col>
                 <v-checkbox v-model="useButtonActivityStore().isLoading"
                   @change="useButtonActivityStore().enableLoading()"></v-checkbox>
               </v-col>
               <v-col>
                 <v-text-field v-model="useButtonActivityStore().loading"
                   :disabled="!useButtonActivityStore().isLoading" placeholder="primary" hide-details clearable
                   @click:clear="useButtonActivityStore().clearLoadingColor"></v-text-field>
               </v-col>

             </v-expansion-panel-text>
           </v-expansion-panel>

           <!-- Ripple -->
           <v-expansion-panel :disabled="useButtonActivityStore().isLoading">
             <v-expansion-panel-title>
               <template v-slot:default="{ expanded }">
                 <v-row no-gutters>
                   <v-col class="d-flex justify-start" cols="4">
                     Ripple
                   </v-col>
                   <v-col class="text-grey" cols="8">
                     <v-fade-transition leave-absolute>
                       <span v-if="expanded" key="0">
                         Enable/ Disable and set a color
                       </span>
                       <span v-else key="1">
                         {{ useButtonActivityStore().ripple }}
                       </span>
                     </v-fade-transition>
                   </v-col>
                 </v-row>
               </template>
             </v-expansion-panel-title>
             <v-expansion-panel-text>
               <v-col>
                 <v-checkbox v-model="useButtonActivityStore().isRipple"
                   @change="useButtonActivityStore().enableRipple()"></v-checkbox>
               </v-col>
               <v-col>
                 <v-text-field v-model="useButtonActivityStore().ripple" :disabled="!useButtonActivityStore().isRipple"
                   placeholder="true" hide-details clearable
                   @click:clear="useButtonActivityStore().clearRippleColor()"></v-text-field>
               </v-col>

             </v-expansion-panel-text>
           </v-expansion-panel>


         </v-expansion-panels>
       </v-col>
     </v-row>
   </v-container>
 </v-card>
</template>

<script setup>
import { useButtonActivityStore } from '~/stores/buttonActivity'

import { useComponentSearchStore } from '~/stores/componentSearch';

// Search Query
import { ref, computed } from "vue";

// Reactive data for cards and search query
const cards = ref([
  { id: 0, title: "Styled" },
  { id: 1, title: "Activity" },
  { id: 2, title: "Interactive" },
  // Add more cards as needed
]);

const searchQuery = ref(""); // Reactive search input

// Computed property for filtered cards
const matchesSearch = (card) => {
  return card.title.toLowerCase().includes(useComponentSearchStore().searchQuery.toLowerCase());
};

</script>

<style>

</style>