<!-- pages/index.vue -->
<template>
        <h1>{{ greeting }}</h1>
        <NuxtLink to="/about" class="link">О нас</NuxtLink>
        <button @click="changeGreeting">Change Greeting</button>
        <GreetingCard title="Welcome to Nuxt" description="This is your first Nuxt.js 3 component!" />
        <InfoBox text="Это тестовый текст, Максим, ты молодец!"/>
</template>

<script setup>
const greeting = ref('Hello, Nuxt 3!');

function changeGreeting() {
    greeting.value = 'Welcome to the Nuxt.js 3 Course!';
}
</script>

<style scoped>

h1 {
    font-size: 2.5rem;
    color: #2f495e;
}

button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #6541b8;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s ease;
}

button:hover {
    background-color: #369a6e;
    transform: scale(1.1);
}

</style>