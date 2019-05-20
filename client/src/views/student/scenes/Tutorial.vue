<template>
    <div class="tutorial-container">
        <TutoProgress />
    </div>
</template>

<script>
    import TutoProgress from '@/components/tutorial/TutoProgress.vue'

    export default {
        name: "Tutorial",
        components: { TutoProgress }
    }
</script>

<style scoped>
    .tutorial-container {
        height: 100vh;
    }
</style>