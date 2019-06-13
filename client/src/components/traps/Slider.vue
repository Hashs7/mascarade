<template>
    <div class="slider__container">
      <carousel class="slider__carousel" :per-page="1" :mouse-drag="false" :paginationColor="black" :paginationActiveColor="white" >
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
            <Comment name="Jean Lefert" date="Il y a 2h" description="Trop cool cette photo !"/>
            <Comment name="Pauline Bernard" date="Il y a 3 jours" description="Ah t'es trop belle !"/>
        </div>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    import Harassment from '@/assets/img/harassment.jpg';
    import Comment from '@/components/traps/post/Comment';

    export default {
        name: "Slider",
        components: {  Carousel, Slide, Comment },
        data: () => ({
          harassment: Harassment
        }),
        methods: {
           
        },
    }
</script>

<style scoped lang="scss">
.slider {
  &__container {
    border: 1.5px solid $white;
    .VueCarousel-dot-container {
      margin: 0;
    }
  }
  &__carousel {
    &.VueCarousel {
        .VueCarousel-pagination{
        margin-top: -6rem !important;
        z-index: 5 !important;
      }
    }
  }
  &__image {
    width: 100%;
  }
  &__group {
    padding: 0 7rem 3.8rem 7rem;
  }
  &__title {
    font-size: 1.6rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  &__separate {
    height: 1px;
    background: grey;
    width: 46rem;
    margin-bottom: 1.7rem;
  }
}
</style>
