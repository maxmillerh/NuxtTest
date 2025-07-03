import { posts } from '../../data/posts';

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id');

  if (!id || isNaN(parseInt(id))) {
    throw createError({ statusCode: 400, message: 'Некорректный ID поста' });
  }

  const post = posts.find(p => p.id === parseInt(id));
  if (!post) {
    throw createError({ statusCode: 404, message: `Пост с ID ${id} не найден` });
  }

  return post;
});