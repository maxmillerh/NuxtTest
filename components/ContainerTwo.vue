<!-- components/Container-two.vue -->
<template>
  <div class="container-css-two">
    <slot></slot>
  </div>
</template>


<style scoped>
.container-css-two {
  background-color: transparent;
  padding: 20px;
  border-radius: 20px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
}

</style>