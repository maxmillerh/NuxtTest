<template>
    <nav>
        <NuxtLink to="/" class="link-cust-header .nuxt-link-active">Главная</NuxtLink> 
        <NuxtLink to="/about" class="link-cust-header">О нас</NuxtLink> 
        <NuxtLink to="/contacts" class="link-cust-header">Контакты</NuxtLink>
        <NuxtLink to="/users" class="link-cust-header">Люди</NuxtLink>
        <NuxtLink to="/posts" class="link-cust-header">Блог</NuxtLink>
        <NuxtLink to="/api-test" class="link-cust-header">API</NuxtLink>
    </nav>
</template>

<style scoped>
nav{
    display: flex;
    gap: 30px;
}
.link-cust-header{
    color: var(--black);
    font-weight: 600;
    font-size: 20px;
}

/* .link-cust-header:hover{
    text-shadow: 3px 3px black;
} */

</style>
