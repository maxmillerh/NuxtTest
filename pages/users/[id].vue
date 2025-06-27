<template>
    <Container>
        <h1>Профиль пользователя</h1>
        <p>ID: {{ route.params.id }}</p>
    </Container>
</template>

<script setup>
const route = useRoute();
</script>
