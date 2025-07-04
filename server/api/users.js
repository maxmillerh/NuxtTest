import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';

const filePath = resolve('data/users.json');

export default defineEventHandler(async (event) => {
  if (event.node.req.method === 'GET') {
    try {
      const data = await readFile(filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Ошибка чтения файла пользователей'
      });
    }
  }

  if (event.node.req.method === 'POST') {
    try {
      const body = await readBody(event);
      await writeFile(filePath, JSON.stringify(body, null, 2), 'utf-8');
      return { success: true };
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Ошибка записи файла пользователей'
      });
    }
  }
});