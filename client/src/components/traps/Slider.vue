<template>
    <div class="slider__container">
        <carousel class="slider__carousel"
                  :per-page="1"
                  :mouse-drag="true"
                  paginationColor="#B3EEFF"
                  paginationActiveColor="#4E00FF"
                  paginationPosition="bottom-overlay"
                  :navigationEnabled="true"
                  @page-change="changeSlide">
            <slide class="slider__slide">
                <img class="slider__image" :src="sliderFirst"/>
            </slide>
            <slide>
                <img class="slider__image" :src="sliderSecond"/>
            </slide>
            <slide>
                <img class="slider__image" :src="sliderThree"/>
            </slide>
            <slide>
                <img class="slider__image" :src="sliderFour"/>
            </slide>
            <slide>
                <img class="slider__image" :src="sliderFive"/>
            </slide>
        </carousel>
        <div class="slider__group">
            <h2 class="slider__title"> Découvre la photo originale </h2>
            <div class="slider__separate"></div>
            <Comment name="Jean Lefert" date="Il y a 2h" description="Trop cool ces photos !"/>
            <Comment name="Pauline Bernard" date="Il y a 3 jours" description="Ah t'es trop belle !"/>
        </div>
    </div>
</template>

<script>
    import {Carousel, Slide} from 'vue-carousel';
    import Harassment from '@/assets/img/harassment.jpg';
    import SliderFirst from '@/assets/img/slider/slider_1.jpg';
    import SliderSecond from '@/assets/img/slider/slider_2.jpg';
    import SliderThree from '@/assets/img/slider/slider_3.jpg';
    import SliderFour from '@/assets/img/slider/slider_4.jpg';
    import SliderFive from '@/assets/img/slider/slider_5.jpg';
    import Comment from '@/components/traps/post/Comment';

    export default {
        name: "Slider",
        components: {Carousel, Slide, Comment, Harassment, SliderFirst,
        SliderSecond, SliderThree, SliderFour, SliderFive},
        data: () => ({
            harassment: Harassment,
            sliderFirst: SliderFirst,
            sliderSecond: SliderSecond,
            sliderThree: SliderThree,
            sliderFour: SliderFour,
            sliderFive: SliderFive,
            points: 0
        }),
        methods: {
            changeSlide(i) {
                if(this.points >= 4) return;
                this.points += 1;
                this.$store.dispatch('updateAchievement', {type: 'points', amount: 5})
            }
        },
    }
</script>

<style scoped lang="scss">
    .slider {
        &__container {
            background: $white;
            margin-bottom: 50px;
            border-radius: 10px;
            .VueCarousel-dot-container {
                margin: 0;
            }
        }
        &__group {
          padding: 0 7rem 3.8rem 7rem;
        }
        &__separate {
          height: 1px;
          background: grey;
          width: 46rem;
          margin-bottom: 1.7rem;
        }
        &__title {
          margin-bottom: 2rem;
          margin-top: 1.8rem;
          font-size: 1.6rem;
        }
        &__image {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
    }
</style>
