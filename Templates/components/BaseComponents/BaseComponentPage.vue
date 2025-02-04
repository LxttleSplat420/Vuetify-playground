<template>
    <ClientOnly>
        <!-- Add All AuthorComponentPages here -->
        <Author/> 
        <!-- Add this divider to make clear distinctions between different Authors -->
        <v-divider :thickness="20" class="border-opacity-0"></v-divider>
    </ClientOnly>
</template>

<script setup>
// Import All AuthorComponentPages here
import Author from '~/components/BaseComponent/Author/AuthorBaseComponentPage.vue'; //Remember to change the author name
</script>

<style lang="scss" scoped></style>