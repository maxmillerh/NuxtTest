<!-- pages/posts/index.vue -->
<template>
    <h1>Блог</h1>
    <Container>
        <div v-if="pending">Загрузка...</div>
        <div v-else-if="error">Ошибка: {{ error.message }}</div>
        <ul v-else>
            <li v-for="post in posts" :key="post.id">
                <h3>{{ post.title }}</h3>
                <p>{{ post.body }}</p>
            </li>
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
ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 20px;
}

li{
    background-color: rgb(243, 243, 243);
    padding: 10px 20px;
    border-radius: 10px;
    transition: 0.5s all ease;
}
li:hover{
      box-shadow: 0 2px 6px 2px rgba(71, 71, 71, 0.2);
      cursor: pointer;
      background-color: rgb(233, 233, 233);
      transform: scale(1.05);
}

</style>