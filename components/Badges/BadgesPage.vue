<template>
    <ClientOnly>
        <!-- Add All AuthorComponentPages here -->
        <Stefan/> 
        <!-- Add this divider to make clear distinctions between different Authors -->
        <v-divider :thickness="20" class="border-opacity-0"></v-divider>
    </ClientOnly>
</template>

<script setup>
// Import All AuthorComponentPages here
import Stefan from '~/components/Badges/Stefan/StefanBadgesPage.vue'; //Remember to change the author name
</script>

<style lang="scss" scoped></style>