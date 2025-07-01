<!-- components/Footer.vue -->
<template>
    <footer>
        <span>© 2025 Nuxt Course. All rights reserved.</span>
        <div class="wrap-theme">
            Тема:
            <button @click="toggleTheme" class="theme" :class="`theme-${theme}`"></button>
        </div>
        <span>Переходов по сайту: {{ pageVisits }}</span>
    </footer>
</template>

<script setup>
const pageVisits = useState('pageVisits', () => 0);
const theme = useState('theme', () => 'light');

const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    updateBodyClass();
};

const updateBodyClass = () => {
    // Удаляем оба класса на всякий случай
    document.body.classList.remove('light-theme', 'dark-theme');
    // Добавляем нужный класс
    document.body.classList.add(`${theme.value}-theme`);
    // Можно также сохранять тему в localStorage
    localStorage.setItem('theme', theme.value);
};

// При монтировании компонента устанавливаем класс
onMounted(() => {
    // Проверяем, есть ли сохраненная тема в localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        theme.value = savedTheme;
    }
    updateBodyClass();
});
</script>

<style scoped>
footer {
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

.wrap-theme {
    display: flex;
    align-items: center;
    gap: 5px;
}

.theme {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 2px solid #838383;
    cursor: pointer;
}

.theme-light {
    background-color: white;
}

.theme-dark {
    background-color: #333;
}
</style>