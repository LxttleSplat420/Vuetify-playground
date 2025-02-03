<template>
    <ClientOnly>
        <Stefan/>
        <v-divider :thickness="20" class="border-opacity-0"></v-divider>
    </ClientOnly>
</template>

<script setup>
import Stefan from '~/components/Selects/Stefan/StefanSelectsPage.vue';
</script>

<style lang="scss" scoped></style>