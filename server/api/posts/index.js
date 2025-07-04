// server/api/posts/index.js
import { readFile } from 'fs/promises';
import { resolve, dirname } from 'path';
import { existsSync, mkdirSync } from 'fs';

const filePath = resolve('data/posts.json');

export default defineEventHandler(async (event) => {
  const { userId } = getQuery(event);

  // Убедимся, что папка data существует
  const dir = dirname(filePath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  try {
    const data = await readFile(filePath, 'utf-8').catch(() => '[]');
    const posts = JSON.parse(data);

    // Проверяем, что posts — массив
    if (!Array.isArray(posts)) {
      console.error('data/posts.json не является массивом:', posts);
      return [];
    }

    // Если userId указан, фильтруем посты (сравниваем как строки)
    if (userId) {
      const filteredPosts = posts.filter(post => String(post.userId) === String(userId));
      console.log(`Фильтр постов для userId=${userId}:`, filteredPosts);
      return filteredPosts;
    }

    // Если userId не указан, возвращаем все посты
    console.log('Все посты:', posts);
    return posts;
  } catch (error) {
    console.error('Ошибка чтения/парсинга файла постов:', error);
    return [];
  }
});