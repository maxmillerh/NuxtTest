<!-- components/Container.vue -->
<template>
  <div class="container-css">
    <slot></slot>
  </div>
</template>


<style scoped>
.container-css {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 20px;
  margin: 20px auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 1200px;
  width: 100%;
}


p {
  color: #3a3a3a;
}
</style>