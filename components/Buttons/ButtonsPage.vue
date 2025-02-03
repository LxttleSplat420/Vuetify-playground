<template>
    <ClientOnly>
        <Stefan/>
        <v-divider :thickness="20" class="border-opacity-0"></v-divider>
        <Alienbushman/>
    </ClientOnly>
</template>

<script setup>
import Stefan from '~/components/Buttons/Stefan/StefanButtonsPage.vue';
import Alienbushman from '~/components/Buttons/Alienbushman/AlienButtonsPage.vue';
</script>

<style lang="scss" scoped></style>