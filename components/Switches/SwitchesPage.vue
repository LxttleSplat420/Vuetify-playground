<template>
    <ClientOnly>
        <!-- Add All AuthorComponentPages here -->
        <Stefan/> 
        <v-divider :thickness="20" class="border-opacity-0"></v-divider>
    </ClientOnly>
</template>

<script setup>
// Import All AuthorComponentPages here
import Stefan from '~/components/Switches/Stefan/StefanSwitchesPage.vue'; //Remember to change the Author name
</script>

<style lang="scss" scoped></style>