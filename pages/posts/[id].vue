<!-- pages/posts/[id].vue -->
<template>
  <h1>{{ post?.title }}</h1>
  <Container>
    <div v-if="pending">Загрузка...</div>
    <div v-else-if="error">Ошибка: {{ error.message }}</div>
    <div v-else>
      <p class="post_text">{{ post.text }}</p>
      <NuxtLink class="link-cust" @click="goBack">Назад</NuxtLink>
      <span>Просмотров: {{ pageVisitsPost }}</span>
    </div>
  </Container>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const pageVisitsPost = useState('pageVisitsPost', () => 0);
onMounted(() => {
  pageVisitsPost.value += 1;
});

const route = useRoute();
const postId = route.params.id;
const { data: post, pending, error } = await useFetch(`/api/posts/${postId}`);

const router = useRouter();
function goBack() {
  router.back();
}
</script>

<style scoped>
p {
  margin-bottom: 40px;
}
</style>