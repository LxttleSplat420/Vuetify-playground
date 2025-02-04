<template>

  <v-dialog max-width="950" v-model="dialogVisible" transition="dialog-top-transition">

    <template v-slot:default="{ isActive }">
      <v-card color="indigo">
        <v-card-title :style="{ fontSize: '34px', color: '#e9eaf5', fontWeight: 'bold' }">
          Welcome to the Vuetify Virtual Playground
        </v-card-title>
        <v-card color="#e9eaf5">
          <v-container>
            <h3> <v-icon class="mx-2">mdi-menu</v-icon> Use the Navigation Drawer to navigate to your desired component.
              (Ex. Buttons)</h3>
            <h3> <v-icon class="mx-2">mdi-magnify</v-icon> Search for a specific component type using the search icon at
              the top. (Ex. Styled)</h3>
            <h3> <v-icon class="mx-2">mdi-filter</v-icon> Specify what to search for using the filter at the top. (Ex.
              Author)</h3>
              <h3> <v-icon class="mx-2">mdi-dots-vertical</v-icon> Currently no function</h3>
            <h3 class="d-flex align-center">
              <v-switch :readonly="false" class="mr-2" v-model="isLightTheme" color="primary" true-icon="mdi-weather-sunny"
                false-icon="mdi-weather-night" inset />
              Can be toggled to switch between dark and light mode. (Ex. Dark mode [the preferred theme])
            </h3>

          </v-container>
          <div>
            *Note: (Test page is only for development purposes)
          </div>
        </v-card>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Close Dialog" @click="dialogVisible = false" :style="{ backgroundColor: '#e9eaf5' }"
            color="indigo"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>

  <div v-if="dialogVisible" class="spotlight-overlay">
  </div>

</template>

<script setup lang="ts">

import { ref, onMounted, watch } from 'vue'
const dialogVisible = ref(false)

//Update page URL when search query is entered
const route = useRoute();
const router = useRouter();

watch(() => dialogVisible.value, () => {  
  router.replace({ query: { ...route.query, Search: "", Filter: "Component Type" } }); //Update URL Search Term
  useComponentSearchStore().searchQuery = "";    
  useComponentSearchStore().filter = "Component Type"; 
},
);

onMounted(() => {
  // Automatically show dialog when page is mounted
  dialogVisible.value = true;
})

const theme = useTheme();
const isLightTheme = ref(theme.global.name.value === 'light');

</script>

<style scoped>
.spotlight-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle at top left, rgba(0, 0, 0, 0) 80px, rgba(0, 0, 0, 0.8) 120px);
  pointer-events: none;
  /* Ensures interactions below aren't blocked */
  z-index: 10000;
  /* Ensure it's above the app bar (default z-index for v-app-bar is 1300) */
}
</style>