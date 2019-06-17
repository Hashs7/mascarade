<template>
    <div class="carousel">
        <div class="controls">

        </div>
        <carousel :per-page="1"
                  :mouse-drag="false"
                  paginationColor="#B3EEFF"
                  paginationActiveColor="#4E00FF">

            <slide class="quizz__slide" v-for="(slide, i) in slides" :key="i">
                <h3 class="quizz__listTitle">{{slide.label}}</h3>
                <ul class="quizz__list">
                    <li v-for="(res, j) in slide.responses" :key="j">
                        <input class="res"
                               type="radio"
                               :id="sub(res)+j"
                               :name="slide.label"
                               :value="res"
                               v-model="slide.selected"
                               @click="selectRes">
                        <label class="res" :for="sub(res)+j">{{res}}</label>
                    </li>
                </ul>
            </slide>

        </carousel>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    import {updateQuizz} from "../../../utils/API";

    //TODO ajouter les controles
    export default {
        name: "QuizzSlide",
        components: {
            Carousel,
            Slide
        },
        data: () => ({
            slides: [{
                label: "Si tu devais être l'égérie d'une marque, ce serait...",
                responses: ['Chanel', 'Balmain', 'Dior', 'Ta propre marque'],
                selected: ''
            },{
                label: "Tu définis ton style comme...",
                responses: ['Classique, fidèle à à toi même', 'Très naturel, jogging toute la journée', 'Très décalé', 'Jamais sans maquillage'],
                selected: ''
            },{
                label: "Quand tu es dans la rue, tu veux que les gens...",
                responses: ['Te remarquent et t’admirent !', 'Te regardent à tout prix, tu aimes choquer et être vu', 'Te trouvent élégant/e', 'Te trouvent discret/e sans pour autant être effacé/e'],
                selected: ''
            },{
                label: "Avec qui tu pourrais te mettre en couple ?",
                responses: ['Un chanteur', 'Un rappeur', 'Un DJ', 'Un mannequin'],
                selected: ''
            },{
                label: "Sur les réseaux sociaux, tu es plutôt...",
                responses: ['Toujours debout', 'Toujours la banane', 'Tu postes de temps en temps', 'Un(e) roi/reine'],
                selected: ''
            }]
        }),
        methods: {
            sub(id) {
                return id.slice(0, 8)
            },
            selectRes() {
                const {studentId, sessionId} = this.$store.state;
                setTimeout(() => {
                    const responses = this.slides.map(el => el.selected);
                    const clearRes = responses.filter(el => el.length > 0);
                    updateQuizz(studentId, sessionId, clearRes);
                }, 10);
            }
        }
    }
</script>

<style lang="scss">
    .quizz {
        &__list {
            color: $violet;
            li {
                input {
                    margin-right: 1rem;
                }
            }
        }
        &__listTitle {
            font-weight: normal;
            margin-bottom: 3rem;
            font-size: 2rem;
        }
        &__slide {
            padding: 0 7rem 3.8rem 7rem;
        }
    }
    .res {
        cursor: pointer;
    }
    .slider__image {
        width: 100%;
    }
</style>