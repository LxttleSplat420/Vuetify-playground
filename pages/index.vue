<script setup>
import HomeAppBar from '~/components/HomePage/HomeAppBar.vue'

 definePageMeta({
   layout: 'navigationbar',
 })
</script>

<template>
<HomeAppBar/>

<div>
    <h1>
        Welcome to the Vuetify Virtual Playground. 
    </h1>
    
    <h2>
        Please select a Component from the Navigation Drawer, on the top left.
    </h2>
    Note: (Test page is only for development purposes)
    
</div>

</template>



<style lang="scss" scoped></style>