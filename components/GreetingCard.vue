<!-- components/GreetingCard.vue -->
<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
});
</script>

<style scoped>
.card {
  background-color: #f4f4f4;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem auto;
  max-width: 400px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #2f495e;
}

p {
  color: #666;
}
</style>