<template>
  <div class="container">
    <h1>{{ greeting }}</h1>
    <button @click="changeGreeting">Change Greeting</button>
    <GreetingCard
      title="Welcome to Nuxt"
      description="This is your first Nuxt.js 3 component!"
    />
  </div>
</template>

<script setup>
const greeting = ref('Hello, Nuxt 3!');

function changeGreeting() {
  greeting.value = 'Welcome to the Nuxt.js 3 Course!';
}
</script>

<style scoped>
.container {
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  color: #2f495e;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #41b883;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #369a6e;
}
</style>