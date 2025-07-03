<!-- components/PostCard.vue -->
<template>
  <div class="post-card">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <span>{{ author }}</span>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  userId: Number,
  author: String,
});
</script>

<style scoped>
.post-card {
    background-color: var(--white2);
    padding: 25px 35px 60px 35px;
    border-radius: 10px;
    transition: 0.5s all ease;
    height: 100%;
    position: relative;
}


.post-card:hover {
    box-shadow: 0 2px 6px 2px rgba(71, 71, 71, 0.2);
    cursor: pointer;
    background-color: rgb(233, 233, 233);
    transform: scale(1.05);
}

span{
  position: absolute;
  bottom: 15px;
  right: 15px;
  color:#369a6e;
}

h3 {
  color: #2f495e;
  margin-bottom: 8px;
  text-align: left;
}

p {
  color: #666;
  text-align: left;
}
</style>