<template>

    <ClientOnly>
        <ButtonsAppBar />
        <StyledButton />
        <ActivityButton />
        <InteractiveButton />
    </ClientOnly>
</template>

<script setup>
import ButtonsAppBar from '~/components/Buttons/ButtonsAppBar.vue';

import StyledButton from '@/components/Buttons/StyledButton.vue';
import ActivityButton from '@/components/Buttons/ActivityButton.vue';
import InteractiveButton from '~/components/Buttons/InteractiveButton.vue';
</script>

<style lang="scss" scoped></style>