<!-- pages/posts/[id].vue -->
<template>
    <h1>{{ post.title }}</h1>
    <Container>
        <div v-if="pending">Загрузка...</div>
        <div v-else-if="error">Ошибка: {{ error.message }}</div>
        <div v-else>
            <p>{{ post.body }}</p>
            <NuxtLink class="link-cust" to="/posts">Назад</NuxtLink>
            <span>Просмотров: {{ pageVisitsPost }}</span>
        </div>
    </Container>
</template>


<!-- скрипты -->
<script setup>

/* счетчик */
const pageVisitsPost = useState('pageVisitsPost', () => 0);
onMounted(() => {
  pageVisitsPost.value += 1;
});

/* контент */
const route = useRoute();
const postId = route.params.id; 
const { data: post, pending, error } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
</script>



<!-- стили -->
<style scoped>
p{
    margin-bottom: 40px;
}

</style>