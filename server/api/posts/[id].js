/* server/api/posts/[id].js */

import { readFile } from 'fs/promises';
import { resolve, dirname } from 'path';
import { existsSync, mkdirSync } from 'fs';

const filePath = resolve('data/posts.json');

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');

  if (!id || isNaN(parseInt(id))) {
    throw createError({ statusCode: 400, message: 'Некорректный ID поста' });
  }

  try {
    const data = await readFile(filePath, 'utf-8').catch(() => '[]');
    const posts = JSON.parse(data);

    if (!Array.isArray(posts)) {
      console.error('data/posts.json не является массивом:', posts);
      return null;
    }

    const post = posts.find(p => p.id === parseInt(id));
    if (!post) {
      console.log(`Пост с ID ${id} не найден`);
      return null; // Можно вернуть throw createError({ statusCode: 404, ... }) если 404 нужен
    }

    return post;
  } catch (error) {
    console.error('Ошибка чтения/парсинга файла постов:', error);
    return null;
  }
});