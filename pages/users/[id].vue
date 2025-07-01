<!-- pages/users/[id].vue -->
<template>
    <Container>
        <div class="profile-header">
            <NuxtLink class="back" to="/users">
               <span>Назад</span>
            </NuxtLink>
            <div>
                <h1>Профиль пользователя</h1>
                <img :src="`/img/${userData.image}`" :alt="userData.name" class="profile-avatar" />
                <h3>{{ userData.name }}</h3>
                <p>ID: {{ route.params.id }}</p>
            </div>
        </div>
    </Container>
</template>

<script setup>
import { onMounted } from 'vue';
const pageVisits = useState('pageVisits');
onMounted(() => {
  pageVisits.value += 1;
});
const route = useRoute();
const { users } = useUsers();

const userData = users[route.params.id] || { 
    name: 'Пользователь не найден', 
    image: 'default.jpg' 
};
</script>

<style scoped>
h1{
    margin-bottom: 30px;
    color: #aaaaaa;
}

.profile-header{
    position: relative;
}

.back{
    font-size: 14px;
    font-weight: 600;
    color: #333;
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 20px;
    background-color: #e4e4e4;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    align-items: center;
    cursor: pointer;
}

.profile-avatar{
    border-radius: 50%;
    width: 180px;
    height: 180px;
}

</style>