<!-- pages/users/[id].vue -->
<template>
  <Container>
    <div class="profile-header">
      <NuxtLink class="back" @click="goBack">Назад</NuxtLink>
      <div>
        <h1>Профиль пользователя</h1>
        <img :src="`/img/${userData.image}`" :alt="userData.name" class="profile-avatar" />
        <h2>{{ userData.name }}</h2>
        <p>ID: {{ route.params.id }}</p>
      </div>
    </div>
    <div v-if="pending" class="skeleton-posts wrapCards">
      <p>Загружаем статьи...</p>
      <div class="skeleton-card" v-for="n in 5" :key="n"></div>
    </div>
    <div v-else-if="error">Ошибка: {{ error.message }}</div>
    <div v-else class="pageContent">
      <h3>Статьи пользователя</h3>
      <div class="wrap_Post">
        <NuxtLink v-for="post in posts" :key="post.id" :to="`/posts/${post.id}`">
          <PostCard :title="post.title" :description="post.description"></PostCard>
        </NuxtLink>
      </div>
      <button v-if="isLoggedIn" class="link-cust logout-btn" @click="handleLogout">Выйти</button>
    </div>
  </Container>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useState } from '#app';
import { useUsers } from '../composables/useUsers';

const pageVisits = useState('pageVisits', () => 0);
const loggedInUserId = useState('loggedInUserId', () => '');
onMounted(() => {
  pageVisits.value += 1;
});

const route = useRoute();
const router = useRouter();
const { users } = useUsers();
const userData = computed(() => users[route.params.id] || {
  name: 'Пользователь не найден',
  image: 'default.jpg',
});

const { data: posts, pending, error } = useAsyncData(
  `user-posts-${route.params.id}`,
  () => $fetch(`/api/posts?userId=${route.params.id}`)
);

const isLoggedIn = computed(() => loggedInUserId.value === route.params.id);
const handleLogout = () => {
  if (process.client) {
    localStorage.removeItem('userId');
  }
  loggedInUserId.value = '';
  router.push('/login');
};

function goBack() {
  router.back();
}
</script>

<style scoped>
h1 {
  margin-bottom: 30px;
  color: #aaaaaa;
}

h3 {
  text-align: left;
  width: 80%;
  margin: 30px auto 0 auto;
  padding: 0 30px;
  color: #aaaaaa;
  font-size: 28px;
}

.profile-header {
  position: relative;
}

.wrap_Post {
  width: 80%;
  margin: 30px auto;
}

.back {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 20px;
  background-color: #e4e4e4;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
  cursor: pointer;
}

.profile-avatar {
  border-radius: 50%;
  width: 180px;
  height: 180px;
  margin-bottom: 10px;
}

.logout-btn {
  display: block;
  width: 200px;
  margin: 20px auto;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}
</style>