/* composables/useUsers.js */
import { ref } from 'vue';
import { $fetch } from 'ofetch';

export const useUsers = () => {
  const users = ref({});

  const loadUsers = async () => {
    try {
      const response = await $fetch('/api/users');
      console.log('Загруженные пользователи:', response);
      users.value = response && typeof response === 'object' ? response : {};
    } catch (error) {
      console.error('Ошибка загрузки пользователей:', error);
      users.value = {};
    }
  };

  // Вызываем загрузку пользователей один раз при инициализации
  loadUsers();

  const addUser = async ({ name, login, pass }) => {
    console.log('Добавление пользователя:', { name, login, pass });
    // Убедимся, что users загружены
    await loadUsers();

    // Генерируем новый уникальный ID
    const keys = Object.keys(users.value).map(Number).filter(id => !isNaN(id));
    const newId = keys.length ? String(Math.max(...keys) + 1) : '1';
    console.log('Сгенерирован newId:', newId);

    // Добавляем нового пользователя
    users.value[newId] = {
      name,
      login: login.toLowerCase(),
      pass,
      image: 'default.png'
    };

    // Сохраняем users в JSON-файл через API
    try {
      await $fetch('/api/users', {
        method: 'POST',
        body: users.value
      });
      console.log('Пользователь сохранён, users:', users.value);
    } catch (error) {
      console.error('Ошибка сохранения пользователей:', error);
      throw new Error(`Не удалось сохранить пользователя: ${error.message}`);
    }

    return newId;
  };

  return { users, addUser, loadUsers };
};