<template>
    <div class="global-container">
        <FakeNews />
    </div>
</template>

<script>
    import FakeNews from '@/components/traps/FakeNews.vue'

    export default {
        name: "FakeNewsScene",
        components: { FakeNews }
    }
</script>

<style scoped>
    .global-container {
        height: 100vh;
    }
</style>