<template>
    <h1>API Test</h1>
    <Container>
        <div v-if="pending">Loading...</div>
        <div v-else-if="error">Error: {{ error.message }}</div>
        <div v-else>
            <p>{{ data.message }}</p>
        </div>
    </Container>
</template>

<script setup>
const { data, pending, error } = await useAsyncData('api-test', async () => {
    const response = await $fetch('/api/hello');
    return response;
});
</script>

