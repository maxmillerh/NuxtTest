<!-- pages/users/index.vue -->
<template>
    <h1>Друзья</h1>
    <Container>
        <nav>
            <NuxtLink v-for="(name, id) in users" :key="id" :to="`/users/${id}`">
                {{ name }}
            </NuxtLink>
        </nav>
    </Container>
</template>

<script setup>
const { users } = useUsers();
</script>

<style scoped>
nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>