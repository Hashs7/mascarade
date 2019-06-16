<template>
    <div class="quizz-container">
        <div class="play-container">
            <div v-if="isIntro" class="start">
                <p>Quelle star es-tu ?</p>
                <button @click="startQuizz">JOUER</button>
            </div>
            <div v-else class="carousel">
                <QuizzCarousel />
            </div>
        </div>
        <div v-if="isIntro" class="info">
            <p>Avec ce rapide quizz, découvre le profil de la star que tu pourrais incarner !</p>
            <p>Réponds à plusieurs questions avant de voir le résultat.</p>
        </div>
    </div>
</template>

<script>
    import QuizzCarousel from '@/components/traps/quizz/QuizzCarousel';

    export default {
        name: "QuizzContainer",
        components: {
            QuizzCarousel
        },
        data: () => ({
            isIntro: true
        }),
        methods: {
            startQuizz() {
                this.isIntro = false;
            }
        }
    }
</script>

<style scoped>
    .quizz-container {
        max-width: 600px;
        margin: 0 auto;
    }
    .play-container {
        border: 2px solid #4E00FF;
    }
    .info {
        margin-top: 60px;
    }
</style>