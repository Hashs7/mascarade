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
                <img class="slider__image" :src="harassment"/>
            </slide>
            <slide>
                <img class="slider__image" :src="harassment"/>
            </slide>
            <slide>
                <img class="slider__image" :src="harassment"/>
            </slide>
            <slide>
                <img class="slider__image" :src="harassment"/>
            </slide>
        </carousel>
        <div class="slider__group">
            <h2 class="slider__title"> Holidays in Miami </h2>
            <div class="slider__separate"></div>
            <Comment name="Caroline Miol" date="Il y a 5 minutes" description="Trop de chance "/>
            <Comment name="Jean Lefert" date="Il y a 2h" description="Trop cool cette photo !"/>
            <Comment name="Pauline Bernard" date="Il y a 3 jours" description="Ah t'es trop belle !"/>
        </div>
    </div>
</template>

<script>
    import {Carousel, Slide} from 'vue-carousel';
    import Harassment from '@/assets/img/harassment.jpg';
    import Comment from '@/components/traps/post/Comment';

    export default {
        name: "Slider",
        components: {Carousel, Slide, Comment, Harassment},
        data: () => ({
            harassment: Harassment,
        }),
        methods: {
            changeSlide(i) {
                //TODO
                this.$store.dispatch('updateAchievement', {type: 'points', amount: 1})
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
