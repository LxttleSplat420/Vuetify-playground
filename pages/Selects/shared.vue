<template>
    <ClientOnly>
        <SelectsAppBar />
    </ClientOnly>

    <div>
        <h1>Coming Soon!!!</h1>
    </div>
</template>

<script setup>

import SelectsAppBar from '~/components/Selects/SelectsAppBar.vue';

definePageMeta({
    layout: 'navigationbar',
})
</script>

<style lang="scss" scoped>

</style>