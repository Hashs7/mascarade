<template>
    <div class="quizz__container">
        <div class="play-container">
            <div v-if="quizzState==='intro'" class="start">
                <p class="quizz__title">Quelle star es-tu ?</p>
                <RippleButton :clickAction="startQuizz" name="JOUER"></RippleButton>
            </div>
            <div v-else-if="quizzState==='response'" class="carousel">
                <QuizzCarousel @isLast="showButton" />
                <button v-if="buttonVisible" @click="endQuizz"> Valider</button>
            </div>
            <div v-else class="start">
                <p class="quizz__listTitle">Pour connaître ton résultat nous avons besoin :</p>
                <form action="" method="get" class="form">
                    <div class="form__field">
                        <label for="email">Ton adresse </label>
                        <input type="text" name="name" id="email" required>
                    </div>
                    <div class="form__field">
                        <label for="tel">Ton numéro de téléphone </label>
                        <input type="email" name="tel" id="tel" required>
                    </div>
                    <div class="form__field">
                        <label for="date">Ta date de naissance</label>
                        <input type="text" name="date" id="date" required>
                    </div>
                    <div class="form__field">
                        <RippleButton :clickAction="startQuizz" name="Envoyer"></RippleButton>
                    </div>
                </form>
            </div>
        </div>
        <div v-if="quizzState==='intro'" class="quizz__description">
            <p>Avec ce rapide quizz, découvre le profil de la star que tu pourrais incarner !</p>
            <p>Réponds à plusieurs questions avant de voir le résultat.</p>
        </div>
    </div>
</template>

<script>
    import QuizzCarousel from '@/components/traps/quizz/QuizzCarousel';
    import RippleButton from '@/components/UI/RippleButton';

    export default {
        name: "QuizzContainer",
        components: { QuizzCarousel, RippleButton },
        data: () => ({
            quizzState: "intro",
            buttonVisible: false
        }),
        methods: {
            startQuizz() {
                this.quizzState = "response";
            },
            endQuizz() {
                this.quizzState = "end";
            }, 
            showButton(show) {
                this.buttonVisible = show;
                console.log("show", show);
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
        &__listTitle {
            font-weight: normal;
            margin-bottom: 3rem;
            font-size: 2rem;
        }
        &__description {
            line-height: 1.5rem;
            font-size: 1.4rem;
            margin-top: 6rem;
            padding: 0 7rem 3.8rem 7rem;
        }
    }
    .form {
        &__field {
            display: flex;
            flex-direction: column;
            margin-bottom: 1.2rem; 
            width: 30rem;
            &:last-child {
                display: flex;
                align-items: center;
                margin-top: 2rem; 
            }
            label {
                color: $violet;
            }
            input {
                border: 1px solid $violet;
                border-radius: 1.3rem;
            }
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