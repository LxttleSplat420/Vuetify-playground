<template>
    <ClientOnly>
        <StyledCard />
        <Interactive/>
        <SlotsCard/>
    </ClientOnly>
</template>

<script setup>
import StyledCard from '~/components/Cards/Stefan/Styled/Styled.vue';
import Interactive from '~/components/Cards/Stefan/Interactive/Interactive.vue';
import SlotsCard from '~/components/Cards/Stefan/Slots/Slots.vue';

</script>

<style lang="scss" scoped></style>