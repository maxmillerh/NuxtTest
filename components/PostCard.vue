<!-- components/PostCard.vue -->
<template>
  <div class="post-card">
    <h3>{{ title }}</h3>
    <p>{{ body }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  body: String
});
</script>

<style scoped>
.post-card {
    background-color: rgb(243, 243, 243);
    padding: 10px 20px;
    border-radius: 10px;
    transition: 0.5s all ease;
    height: 100%;
}


.post-card:hover {
    box-shadow: 0 2px 6px 2px rgba(71, 71, 71, 0.2);
    cursor: pointer;
    background-color: rgb(233, 233, 233);
    transform: scale(1.05);
}

h3 {
  color: #2f495e;
}

p {
  color: #666;
}
</style>