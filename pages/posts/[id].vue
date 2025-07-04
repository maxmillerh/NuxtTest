<!-- pages/posts/[id].vue -->
<template>

  <Container>
    <div v-if="pending">Загрузка...</div>
    <div v-else-if="error">Ошибка: {{ error.message }}</div>
    <div v-else>
      <div class="header-post">
        <NuxtLink class="link-cust" @click="goBack">Назад</NuxtLink>
        <span class="author color-five">Автор: {{ author }}</span>
        <span>Просмотров: {{ pageVisitsPost }}</span>
      </div>
      <h1>{{ post?.title }}</h1>
      <p class="post_text">{{ post.text }}</p>
      <div class="comments background-two">
        <h3>Комментарии</h3>
        <div v-if="commentsPending">Загрузка комментариев...</div>
        <div v-else-if="commentsError">Ошибка загрузки комментариев: {{ commentsError.message }}</div>
        <div v-else-if="comments.length === 0">Комментариев пока нет</div>
        <ul v-else class="comment-list">
          <li v-for="comment in comments" :key="`${comment.id}-${comment.userId}`">
            <NuxtLink :to="`/users/${comment.userId}`"><strong class="color-two comment_autor">{{ users[comment.userId]?.name ||
                'Неизвестный автор' }}:</strong></NuxtLink>
            <br>
            <span class="color-five">{{ comment.text }}</span>
          </li>
        </ul>
      </div>
    </div>
  </Container>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUsers } from '../composables/useUsers';

const pageVisitsPost = useState('pageVisitsPost', () => 0);
onMounted(() => {
  pageVisitsPost.value += 1;
});

const route = useRoute();
const postId = route.params.id;
const { data: post, pending, error } = await useFetch(`/api/posts/${postId}`);
const { data: comments, pending: commentsPending, error: commentsError } = await useFetch(`/api/comments/${postId}`);
const { users } = useUsers();

const author = computed(() => {
  return post.value ? users[post.value.userId]?.name || 'Неизвестный автор' : 'Загрузка...';
});

const router = useRouter();
function goBack() {
  router.back();
}
</script>

<style scoped>
p {
  margin-bottom: 40px;
  text-align: left;
  margin: 40px 0;
}

.header-post {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  margin-bottom: 20px;
  align-items: center;
}

.author {
  font-style: italic;
  color: #666;

}

.comment_autor:hover{
  color:var(--green);

}

.comments {
  text-align: left;
  margin-top: 80px;
  padding: 20px 30px;
  border-radius: 20px;

}

.comment-list {
  list-style: none;
  margin-top: 40px;
  padding: 0;

}

.comment-list li {
  margin-bottom: 15px;
  padding: 10px;
  border-left: 3px solid #369a6e;
}
</style>