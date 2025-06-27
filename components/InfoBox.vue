<!-- components/infoBox.vue -->
<template>
  <div class="text-block">
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  text: String,
});
</script>

<style scoped>
.text-block {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 20px;
  margin: 20px auto;
  max-width: 800px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


p {
  color: #3a3a3a;
}
</style>