<!-- pages/users/index.vue -->
<template>
            <h1>Друзья</h1>
    <Container>
        <nav>
            <NuxtLink to="/users/100001">Даниил Петров</NuxtLink>
            <NuxtLink to="/users/2">Гавря Гавриловский</NuxtLink>
            <NuxtLink to="/users/3">Максим Усанов</NuxtLink>
            <NuxtLink to="/users/4">Андрей Кузнецов</NuxtLink>
        </nav>
    </Container>
</template>

<style scoped>
    nav{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>