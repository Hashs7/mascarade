<template>
    <div class="quizz__container">
        <Indicator :type="isValid ? 'valid' : 'invalid'"/>

        <div class="play-container">
            <div v-if="quizzState==='intro'" class="start">
                <img class="quizz__image" :src="quizz"/>
                <p class="quizz__title">Quelle star es-tu ?</p>
                <RippleButton :clickAction="startQuizz" name="JOUER"></RippleButton>
            </div>
            <div v-else-if="quizzState==='response'" class="carousel">
                <QuizzCarousel @isLast="showButton" />
                <div class="btn-container">
                    <button v-if="buttonVisible" @click="endQuizz" class="button__share"> Valider </button>
                </div>
            </div>
            <div v-else-if="quizzState==='final'" class="quizz__final">
                <img class="quizz__finalImage" :src="quizzStar"/>
                <div class="quizz__finalContent">
                    <p class="quizz__finalTitle">Tu es à <span>80%</span> Robert Downey JR !</p>
                </div>
            </div>
            <div v-else class="start start__form">
                <p class="quizz__listTitle">Pour connaître ton résultat nous avons besoin :</p>
                <form action="" method="get" class="form" autocomplete="off">
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
                        <div class="btn-container">
                            <button @click="sendInfo" class="button__share"> Envoyer </button>
                        </div>
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
    import Quizz from '@/assets/img/quizz.jpg';
    import QuizzStar from '@/assets/img/quizz_star.png';
    import RippleButton from '@/components/UI/RippleButton';
    import Indicator from '@/components/traps/Indicator';

    export default {
        name: "QuizzContainer",
        components: { QuizzCarousel, RippleButton, Quizz, QuizzStar, Indicator },
        data: () => ({
            quizzState: "intro",
            quizz: Quizz,
            quizzStar: QuizzStar,
            buttonVisible: false,
        }),
        computed: {
            isValid: {
                get: function () {
                    return this.$store.state.validTrap.quizz;
                },
                set: function (val) {
                    this.$store.state.validTrap.quizz = val;
                    this.$store.dispatch('checkValidateAll');
                }
            }
        },
        methods: {
            startQuizz() {
                this.quizzState = "response";
            },
            endQuizz() {
                this.quizzState = "end";
            }, 
            showButton(show) {
                this.buttonVisible = show;
            },
            sendInfo() {
                this.isValid = true;

                //Todo tester si la valeur des champs est vide
                this.$store.dispatch('updateAchievement', {type: 'points', amount: -5});
                this.quizzState = "final";
            }
        }
    }
</script>

<style scoped lang="scss">
    .quizz{
        &__container {
            position: relative;
            max-width: 600px;
            margin: 0 auto;
            background: $white;
            border-radius: 10px; 
            .button__share {
                border-color: $white;
                color: $white;
                transition: 0.2s ease;
                &:hover {
                    background: $white;
                    color: $violet;
                }
            }
        }
        &__title {
            text-transform: uppercase;
            font-size: 3rem;
            margin-top: 4rem;
        }
        &__listTitle {
            font-weight: normal;
            margin-bottom: 1rem;
            font-size: 2rem;
        }
        &__description {
            line-height: 1.5rem;
            font-size: 1.4rem;
            margin-top: 6rem;
            padding: 0 7rem 3.8rem 7rem;
        }
        &__image {
            width: 100%;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
        &__final {
            display: flex;
            background-color: $grey--background;
        }
        &__finalContent {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 20px;
            line-height: 40px;
            background-image: url('~@/assets/img/quizz_background.png');
            background-size: contain;
            background-position: left;
        }
        &__finalTitle {
            font-size: 35px;
            color: $violet;
            text-transform: uppercase;
            margin-bottom: 0;
            span {
                font-size: 85px;
                line-height: 64px;
            }
        }
        &__finalImage {
            width: 60%;
            border-radius: 10px;
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
                color: $white;
            }
            input {
                border: 1px solid $white;
                border-radius: 1.3rem;
                padding-left: 1.2rem;
                font-size: 1.2rem;
                padding-top : 0.5rem;
                padding-bottom: 0.5rem;
                color: $white;
                outline: none;
            }
        }
    }
    .start {
        display: flex;
        flex-direction: column;
        align-items: center;
        &__form {
            padding-top: 2rem;
            padding-bottom: 1rem;
            height: 324px;
            background: $gradient--diagonal;
            border-radius: 10px;
        }
    }
    .info {
        margin-top: 60px;
    }
    .carousel {
        padding-top: 2rem;
        padding-bottom: 1rem;
        height: 324px;
        background: $gradient--diagonal;
        border-radius: 10px;
        .btn-container {
            display: flex;
            justify-content: center;
            position : relative;
            bottom: 12.5rem;
            .button__share {
                border-color: $white;
                color: $white;
                transition: 0.2s ease;
                &:hover {
                    background: $white;
                    color: $violet;
                }
            }
        }
        &__container {
            padding-top: 2rem;
            padding-bottom: 1rem;
            height: 324px;
        }
    }
</style>