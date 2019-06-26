<template>
    <div class="carousel__container">
        <div class="controls">

        </div>
        <carousel :per-page="1"
                  :mouse-drag="false"
                  paginationColor="#fff"
                  paginationActiveColor="#4E00FF"
                  :navigationEnabled="true"
                  @page-change="slideChange">

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

    export default {
        name: "QuizzSlide",
        components: {
            Carousel,
            Slide
        },
        data: () => ({
            slides: [{
                label: "Quelle est ta marque préférée : ",
                responses: ['Converse', 'Nike', 'New Balance', 'Adidas'],
                selected: ''
            },{
                label: "Ton film préféré :",
                responses: ['Zootopie' , 'Avengers Endgame', 'Les animaux fantastiques','Batman'],
                selected: ''
            },{
                label: "Quel profil as tu dans ton groupe de pote ?",
                responses: ['La/le comique', 'La/le sportif(ve)', 'La/le créatif', 'L\'intello'],
                selected: ''
            },{
                label: "Avec qui voudrais tu vivre ?",
                responses: ['Une/un chanteur(se)', 'Une/un rappeur(se)', 'Une/un DJ', 'Une/un mannequin'],
                selected: ''
            },{
                label: "Sur les réseaux sociaux, tu es plutôt...",
                responses: ['Toujours présent(e)', 'Très discret(e)', 'Tu postes de temps en temps', 'Un(e) roi/reine'],
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
            },
            slideChange(i) {
                console.log(i);
                console.log(this.slides.length -1);
                this.slides.length -1 === i ? this.$emit("isLast", true) : this.$emit("isLast", false); 
            }
        }
    }
</script>

<style lang="scss">
    .quizz {
        &__list {
            color: $white;
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
            color: $white;
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