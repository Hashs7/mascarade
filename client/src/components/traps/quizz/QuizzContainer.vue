<template>
    <div class="quizz__container">
        <div class="play-container">
            <div v-if="isIntro" class="start">
                <p class="quizz__title">Quelle star es-tu ?</p>
                <button @click="startQuizz" class="quizz__button">JOUER</button>
            </div>
            <div v-else class="carousel">
                <QuizzCarousel />
            </div>
        </div>
        <div v-if="isIntro" class="quizz__description">
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

<style scoped lang="scss">
    .quizz{
        &__container {
            max-width: 600px;
            margin: 0 auto;
        }
        &__title {
            text-transform: uppercase;
            font-size: 3rem;
        }
        &__button {
            border: 1px solid $violet;
            border-radius: 2.1rem;
            color: $violet;
            font-size: 1.4rem;
            padding: 1rem 1.3rem;
            font-weight: bold;
            position: relative;
            overflow: hidden;
            z-index: 1;
            transition: 0.5s;
        }
        &__description {
            line-height: 1.5rem;
            font-size: 1.4rem;
            margin-top: 6rem;
            padding: 0 7rem 3.8rem 7rem;
        }
    }
    .start {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .info {
        margin-top: 60px;
    }
</style>