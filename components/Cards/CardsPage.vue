<template>
    <ClientOnly>
        <StyledCard />
        <Interactive/>
        <SlotsCard/>
    </ClientOnly>
</template>

<script setup>
import StyledCard from '@/Authors/Stefan/components/Cards/StyledCard';
import Interactive from '@/Authors/Stefan/components/Cards/InteractiveCard';
import SlotsCard from '@/Authors/Stefan/components/Cards/SlotsCard.vue';

</script>

<style lang="scss" scoped></style>