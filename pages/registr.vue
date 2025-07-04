<!-- pages/registr.vue -->
<template>
  <ContainerTwo>
    <h1>Регистрация</h1>
    <div class="form-container">
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <form @submit.prevent="handleSubmit">
        <div class="form-item">
          <label for="name">Имя</label>
          <input class="color-one" type="text" name="name" placeholder="Даниил Петров" v-model="name">
        </div>
        <div class="form-item">
          <label for="login">Логин</label>
          <input class="color-one" type="text" name="login" placeholder="Buryat" v-model="login">
        </div>
        <div class="form-item">
          <label for="pass">Пароль</label>
          <input class="color-one" type="password" name="pass" placeholder="12345" v-model="password">
        </div>
        <div class="form-item">
          <label for="passConfirm">Повторите пароль</label>
          <input class="color-one" type="password" name="passConfirm" placeholder="12345" v-model="passwordConfirm">
        </div>
        <button class="link-cust" type="submit">Зарегистрироваться</button>
                <div class="qwestreg"> 
          <span>Есть аккаунт?</span>
          <NuxtLink to="/login" class="link-text">Войти</NuxtLink>
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

const name = ref('');
const login = ref('');
const password = ref('');
const passwordConfirm = ref('');
const errorMessage = ref('');
const router = useRouter();
const { users, addUser } = useUsers();
const loggedInUserId = useState('loggedInUserId', () => '');

const handleSubmit = async () => {
  errorMessage.value = '';

  // Проверка, что все поля заполнены
  if (!name.value || !login.value || !password.value || !passwordConfirm.value) {
    errorMessage.value = 'Заполните все поля';
    return;
  }

  // Проверка, что пароли совпадают
  if (password.value !== passwordConfirm.value) {
    errorMessage.value = 'Пароли не совпадают';
    return;
  }

  // Проверка, что логин уникален
  const isLoginTaken = Object.values(users.value).some(
    u => u.login.toLowerCase() === login.value.toLowerCase()
  );
  if (isLoginTaken) {
    errorMessage.value = 'Этот логин уже занят';
    return;
  }

  try {
    // Добавляем нового пользователя
    const newUserId = await addUser({
      name: name.value,
      login: login.value,
      pass: password.value
    });

    // Сохраняем userId в localStorage и useState
    if (process.client) {
      localStorage.setItem('userId', newUserId);
    }
    loggedInUserId.value = newUserId;

    // Перенаправляем на страницу профиля
    router.push(`/login`);
  } catch (error) {
    errorMessage.value = 'Ошибка при регистрации';
    console.error(error);
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