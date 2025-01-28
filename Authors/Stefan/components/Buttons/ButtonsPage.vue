<template>
    <ClientOnly>
        <StyledButton />
        <ActivityButton />
        <InteractiveButton />
    </ClientOnly>
</template>

<script setup>
import StyledButton from '@/Authors/Stefan/components/Buttons/StyledButton.vue';
import ActivityButton from '@/Authors/Stefan/components/Buttons/ActivityButton.vue';
import InteractiveButton from '@/Authors/Stefan/components/Buttons/InteractiveButton.vue';
</script>

<style lang="scss" scoped></style>