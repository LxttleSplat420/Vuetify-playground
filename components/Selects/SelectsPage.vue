<template>

    <ClientOnly>
        <SelectsAppBar />
    </ClientOnly>

    <StyledSelect />
    <ActivitySelect />


</template>

<script setup>
import SelectsAppBar from '~/components/Selects/SelectsAppBar.vue';

import StyledSelect from '~/components/Selects/StyledSelect.vue'
import ActivitySelect from '~/components/Selects/ActivitySelect.vue'
</script>

<style lang="scss" scoped></style>