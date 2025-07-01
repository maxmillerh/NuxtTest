<!-- pages/users/index.vue -->
<template>
    <h1>Друзья</h1>
    <Container>
        <nav>
            <NuxtLink v-for="(user, id) in users" :key="id" :to="`/users/${id}`" class="user-link">
                
                {{ user.name }}
            </NuxtLink>
        </nav>
    </Container>
</template>

<script setup>


import { onMounted } from 'vue';
const pageVisits = useState('pageVisits');
onMounted(() => {
  pageVisits.value += 1;
});
const { users } = useUsers();
</script>

<style scoped>
nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.user-link{
    font-size: 20px;
    text-decoration: none;
    transition: 0.4s all ease;

}
.user-link:hover{
    color: #369a6e;
}
</style>