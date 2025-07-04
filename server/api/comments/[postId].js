import { comments } from '../../data/comments';

export default defineEventHandler((event) => {
  const postId = getRouterParam(event, 'postId');

  if (!postId || isNaN(parseInt(postId))) {
    throw createError({ statusCode: 400, message: 'Некорректный ID поста' });
  }

  const filteredComments = comments.filter(comment => comment.id === parseInt(postId));
  if (filteredComments.length === 0) {
    return []; // Возвращаем пустой массив, если комментариев нет
  }

  return filteredComments;
});