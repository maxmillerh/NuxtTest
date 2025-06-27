<template>
    <div class="container">
        <Navigation />
        <slot></slot>
    </div>
</template>

<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
}
</style>