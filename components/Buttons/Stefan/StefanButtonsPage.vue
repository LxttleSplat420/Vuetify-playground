<template>
    <ClientOnly>
        <Styled/>
        <Activity />
        <Interactive />
    </ClientOnly>
</template>

<script setup>
import Styled from '~/components/Buttons/Stefan/Styled/Styled.vue';
import Activity from '~/components/Buttons/Stefan/Activity/Activity.vue';
import Interactive from '~/components/Buttons/Stefan/Interactive/Interactive.vue';
</script>

<style lang="scss" scoped></style>