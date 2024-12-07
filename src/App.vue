<script setup lang="ts">
    import Home from "@/app/home.vue";
</script>

<template>
    <main>
        <Home />
    </main>
</template>

<style scoped lang="scss">
    main {
        padding: 16px;
        background-image: linear-gradient(to bottom, #000314, #1d2225);
        color: #e2e7e9;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: calc(100vw - 32px);
        height: 100vh;
        overflow: hidden;
    }
</style>