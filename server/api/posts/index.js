// server/api/posts/index.js
import { posts } from '../../data/posts';

export default defineEventHandler((event) => {
  const { userId } = getQuery(event);

  if (userId) {
    const parsedUserId = parseInt(userId);
    if (isNaN(parsedUserId)) {
      throw createError({ statusCode: 400, message: 'Некорректный ID пользователя' });
    }
    const filteredPosts = posts.filter(post => post.userId === parsedUserId);
    if (filteredPosts.length === 0) {
      throw createError({ statusCode: 404, message: `Посты для пользователя с ID ${userId} не найдены` });
    }
    return filteredPosts;
  }

  return posts;
});