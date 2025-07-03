<template>
  <div v-if="isNavigating" class="page-loading">
    <div class="spinner"></div>
  </div>
</template>

<script setup>
const isNavigating = useIsNavigating()
</script>

<style scoped>
.page-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, #4caf50, #81c784);
  animation: loading 1s infinite;
  z-index: 1000;
}
.spinner {
  width: 30px;
  height: 30px;
  border: 4px solid #ccc;
  border-top-color: #4caf50;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 40px auto;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
