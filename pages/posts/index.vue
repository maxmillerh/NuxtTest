<!-- pages/posts/index.vue -->
<template>
  <h1>Блог</h1>
  <Container>
    <div v-if="pending">Загрузка...</div>
    <div v-else-if="error">Ошибка: {{ error.message }}</div>
    <ul v-else class="wrap_Post">
      <NuxtLink v-for="post in filteredPosts" :key="post.id" :to="`/posts/${post.id}`">
        <PostCard :title="post.title" :description="post.description"></PostCard>
      </NuxtLink>
    </ul>
  </Container>
</template>

<script setup>
import { onMounted, computed } from 'vue';

const pageVisits = useState('pageVisits');
onMounted(() => {
  pageVisits.value += 1;
});

const { data: posts, pending, error } = await useFetch('/api/posts');

const filteredPosts = computed(() => {
  return posts.value ? posts.value.map(post => ({
    id: post.id,
    title: post.title,
    description: post.description,
    text: post.text,
  })) : [];
});
</script>

<style scoped>


a {
  color: #333;
  text-decoration: none;
}
</style>