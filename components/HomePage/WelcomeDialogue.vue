<template>   

    <v-dialog max-width="750" v-model="dialogVisible" transition="dialog-top-transition">

      <template v-slot:default="{ isActive }">
        <v-card color="indigo">
          <v-card-title :style="{ fontSize: '34px', color: '#e9eaf5', fontWeight: 'bold' }">
            Welcome to the Vuetify Virtual Playground
          </v-card-title>
          <v-card color="#e9eaf5">          
            <h3>Please select a Component from the Navigation Drawer, on the top left.</h3>
            <div>
              Note: (Test page is only for development purposes) 
            </div>
          </v-card>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Close Dialog" @click="dialogVisible = false" :style="{ backgroundColor: '#e9eaf5' }" color="indigo"></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>

    <div v-if="dialogVisible" class="spotlight-overlay">
  </div>

</template>

<script setup>

import { ref, onMounted } from 'vue'
const dialogVisible = ref(false)

onMounted(() => {
  // Automatically show dialog when page is mounted
  dialogVisible.value = true
})

</script>

<style scoped>

.spotlight-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: radial-gradient(circle at top left, rgba(0, 0, 0, 0) 80px, rgba(0, 0, 0, 0.8) 120px);
  pointer-events: none; /* Ensures interactions below aren't blocked */
  z-index: 10000; /* Ensure it's above the app bar (default z-index for v-app-bar is 1300) */
}
</style>