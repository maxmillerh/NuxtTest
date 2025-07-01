<template>
    <h1>О нас</h1>
    <InfoBox text="Это текст для страницы о нас , вот дак да , вот дак ничего себе" />
</template>

<script setup>
import { onMounted } from 'vue';
const pageVisits = useState('pageVisits');
onMounted(() => {
  pageVisits.value += 1;
});
</script>