<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <nuxt-link to="/" class="font-bold">Nuxt App</nuxt-link>
                <ul class="flex gap-4">
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                    <li><nuxt-link to="/products" class="btn">Products</nuxt-link></li>
                </ul>
            </nav>
        </header>

        
        <div class = "container mx-auto p-4">
            <slot></slot>
        </div>

    </div>
</template>

<script setup>
// You can add any layout-specific logic here
</script>