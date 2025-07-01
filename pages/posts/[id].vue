<!-- pages/posts/[id].vue -->
<template>
    <h1>{{ post.title }}</h1>
    <Container>
        <div v-if="pending">Загрузка...</div>
        <div v-else-if="error">Ошибка: {{ error.message }}</div>
        <div v-else>
            <p>{{ post.body }}</p>
            <NuxtLink class="link-cust" to="/posts">Назад</NuxtLink>
        </div>
    </Container>
</template>

<script setup>
import { onMounted } from 'vue';
const pageVisits = useState('pageVisits');
onMounted(() => {
  pageVisits.value += 1;
});

const route = useRoute();
const postId = route.params.id; // Получаем id из URL

// Загружаем данные поста по id
const { data: post, pending, error } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
</script>

<style scoped>
p{
    margin-bottom: 40px;
}

</style>