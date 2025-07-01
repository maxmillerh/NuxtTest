<template>
    <h1>Контакты</h1>
    <InfoBox text="88005553535 проще позвонить , чем у когото занимать "/>
</template>

<script setup>
import { onMounted } from 'vue';
const pageVisits = useState('pageVisits');
onMounted(() => {
  pageVisits.value += 1;
});

</script>