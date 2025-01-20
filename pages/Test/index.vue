<template>
    <v-container>
      <v-row>
        <v-col>
          <h5>step 2; min:10; max:20</h5>
  
          <v-text-field
            v-model="numberValue"
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
  </template>
  
  <script>
  export default {
    setup () {
      // Define a reactive number value with ref
      const numberValue = ref(15)
  
      return {
        numberValue
      }
    }
  }
  
  definePageMeta({
    layout: 'navigationbar'
  })
  </script>
  
  <style lang="scss" scoped>
  

  </style>
  