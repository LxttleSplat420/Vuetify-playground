<template>
  <v-switch v-model="isOn" class="custom-switch">
    <template v-slot:track>
      <v-icon class="custom-icon">
        {{ isOn ? 'mdi-check' : 'mdi-magnify' }}
      </v-icon>
    </template>
  </v-switch>
</template>

<script setup>
import { ref } from 'vue'

const isOn = ref(false)
</script>

<style scoped>
.custom-switch {
  position: relative;
}

.custom-icon {
  position: absolute;
  left: 10px;
  color: white;
  font-size: 16px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s ease; /* Smooth transition */
}
</style>
