<!-- pages/login.vue -->
<template>
  <ContainerTwo>
    <h1>Вход</h1>
    <div class="form-container">
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <form @submit.prevent="handleSubmit">
        <div class="form-item">
          <label for="login">Логин</label>
          <input class="color-one" type="text" name="login" id="login" placeholder="Buryat" v-model="login">
        </div>
        <div class="form-item">
          <label for="pass">Пароль</label>
          <input class="color-one" type="password" name="pass" id="pass" placeholder="12345" v-model="password">
        </div>
        <button class="link-cust" type="submit">Войти</button>
        <div class="qwestreg"> 
          <span>Нет аккаунта?</span>
          <NuxtLink to="/registr" class="link-text">Зарегистрироваться</NuxtLink>
        </div>
      </form>
    </div>
  </ContainerTwo>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useState } from '#app';
import { useUsers } from '../composables/useUsers';

const login = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();
const { users, loadUsers } = useUsers();
const loggedInUserId = useState('loggedInUserId', () => '');

const handleSubmit = async () => {
  errorMessage.value = '';

  // Убедимся, что пользователи загружены
  await loadUsers();

  // Проверяем, что users.value — объект
  if (!users.value || typeof users.value !== 'object') {
    errorMessage.value = 'Ошибка загрузки пользователей';
    return;
  }

  // Ищем пользователя
  const userEntry = Object.entries(users.value).find(([id, u]) => {
    return u && typeof u === 'object' && u.login && u.login.toLowerCase() === login.value.toLowerCase() && u.pass === password.value;
  });

  if (userEntry) {
    const userId = userEntry[0];
    if (process.client) {
      localStorage.setItem('userId', userId);
    }
    loggedInUserId.value = userId;
    router.push(`/users/${userId}`);
  } else {
    errorMessage.value = 'Неверный логин или пароль';
  }
};
</script>

<style scoped>
form {
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  margin: 0 auto;
  margin-bottom: 120px;
}

.form-item {
  display: flex;
  gap: 10px;
  flex-direction: column;
}



input {
  padding: 10px;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid var(--gray4);
}

.link-cust {
  margin: 0;
  border: none;
}

.container-css {
  background-color: transparent;
}

.error-message {
  color: red;
  margin-bottom: 15px;
  text-align: center;
}
</style>