<script setup>

definePageMeta({
  layout: 'navigationbar',
});

import { ref } from 'vue';

const switchValue = ref(false); // Example reactive state for the switch
const switchRef = ref(null); // Create a ref for the v-switch

</script>

<template>
  <v-switch label="Example Switch" v-model="switchValue" on-label="sadas" />
</template>


<style scoped>
:deep(.v-input--selection-controls__ripple) {
  position: relative;
}

:deep(.v-switch__track) {
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.v-switch__track::after) {
  content: '';
  color: white;
  font-weight: bold;
  position: absolute;
  left: 10px;
}

:deep(.v-switch__track::before) {
  content: '';
  color: white;
  font-weight: bold;
  position: absolute;
  right: 10px;
}
</style>

