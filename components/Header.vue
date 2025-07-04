<!-- components/Header.vue -->
<template>
  <header>
    <div><NuxtLink to="/" class="logo">NUXT MAX</NuxtLink></div>
    <Navigation />
    <div>
      <NuxtLink v-if="!isLoggedIn" to="/login" class="link-cust">Войти</NuxtLink>
      <NuxtLink v-else :to="`/users/${userId}`" class="link-cust">Профиль</NuxtLink>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue';

const userId = useState('loggedInUserId', () => '');
const isLoggedIn = computed(() => !!userId.value);
</script>

<style scoped>
.link-cust {
  background-color: var(--violet);
  transition: 0.5 all ease;
}

header {
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.logo {
  font-weight: 900;
  color: var(--violet);
  font-size: 30px;
  text-shadow: 2px 2px 2px rgb(0, 0, 0, 0.5);
}

.logo.router-link-active {
  border: none;
}
</style>