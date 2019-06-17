<template>
    <div class="slider__container">
        <carousel class="slider__carousel"
                  :per-page="1"
                  :mouse-drag="true"
                  paginationColor="black"
                  paginationActiveColor="blue"
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
        components: {Carousel, Slide, Comment},
        data: () => ({
            harassment: Harassment
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
            border: 1.5px solid $blue;

            .VueCarousel-dot-container {
                margin: 0;
            }
        }

        &__carousel {
            &.VueCarousel {
                .VueCarousel-pagination {
                    margin-top: -6rem !important;
                    z-index: 5 !important;
                }
            }
        }
    }
</style>
