<template>
    <ClientOnly>
        <!-- Add All Component Types here -->
        <Interactive />
        <Popover />
        <Vlist />
        <Styled />
    </ClientOnly>
</template>

<script setup>
//Import All Component Types here
import Interactive from '~/components/Menus/Stefan/Interactive/Interactive.vue';
import Popover from '~/components/Menus/Stefan/Popover/Popover.vue';
import Vlist from '~/components/Menus/Stefan/Vlist/Vlist.vue';
import Styled from '~/components/Menus/Stefan/Styled/Styled.vue';

</script>

<style lang="scss" scoped></style>