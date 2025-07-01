<!-- layouts/defult.vue -->
<template>
    <div class="container">
        <Header />
        <slot></slot>
        <Footer />
    </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
</script>