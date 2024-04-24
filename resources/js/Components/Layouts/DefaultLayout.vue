<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<template>
    <Header />
    <div class="max-w-7xl mx-auto">
        <slot />
    </div>
    <Footer />
</template>