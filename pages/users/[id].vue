<!-- pages/users/[id].vue -->
<template>
    <Container>
        <h1>Профиль пользователя</h1>
        <h3>{{ userName }}</h3>
        <p>ID: {{ route.params.id }}</p>
    </Container>
</template>

<script setup>
const route = useRoute();
const { users } = useUsers();
const userName = users[route.params.id] || 'Пользователь не найден';
</script>