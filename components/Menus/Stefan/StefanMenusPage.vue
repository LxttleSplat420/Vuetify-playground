<template>
    <ClientOnly>
        <!-- Add All Component Types here -->
        <Interactive />
        <Popover />
        <Vlist />
    </ClientOnly>
</template>

<script setup>
//Import All Component Types here
import Interactive from '~/components/Menus/Stefan/Interactive/Interactive.vue';
import Popover from '~/components/Menus/Stefan/Popover/Popover.vue';
import Vlist from '~/components/Menus/Stefan/Vlist/Vlist.vue';

</script>

<style lang="scss" scoped></style>