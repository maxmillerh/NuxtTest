<!-- pages/posts/index.vue -->
<template>
    <h1>Блог</h1>
    <Container>
        <div v-if="pending">Загрузка...</div>
        <div v-else-if="error">Ошибка: {{ error.message }}</div>
        <ul v-else>
            <NuxtLink v-for="post in posts" :key="post.id" :to="`/posts/${post.id}`">
                <PostCard :title="post.title" :body="post.body"></PostCard>
            </NuxtLink>
        </ul>
    </Container>
</template>

<script setup>
const { data: posts, pending, error } = await useFetch('https://jsonplaceholder.typicode.com/posts');

const filteredPosts = posts.value.map(post => ({
    id: post.id,
    title: post.title,
    body: post.body
}));
</script>

<style scoped>
ul {
    list-style: none;
      display: grid;
  grid-template-columns: 1fr 1fr; /* Две колонки равной ширины */
  gap: 20px;
    padding: 0 20px;
}


a{
    color: #333;
    text-decoration: none;
}
</style>