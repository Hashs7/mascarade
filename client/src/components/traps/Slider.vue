<template>
    <div class="slider__container slider-photos">
        <Indicator :type="isValid ? 'valid' : 'invalid'"/>
        <carousel class="slider__carousel"
                  :per-page="1"
                  :mouse-drag="true"
                  :paginationEnabled="false"
                  :navigationEnabled="true">
            <slide class="slider__slide">
                <img class="slider__image" :src="sliderThree"/>
                <div class="validate" v-if="!isValid">
                    <RippleButton :clickAction="() => validate(false)" name="Valider"></RippleButton>
                </div>
            </slide>
            <slide class="slider__slide">
                <img class="slider__image" :src="sliderSecond"/>
                <div class="validate" v-if="!isValid">
                    <RippleButton :clickAction="() => validate(false)" name="Valider"></RippleButton>
                </div>
            </slide>
            <slide class="slider__slide">
                <img class="slider__image" :src="sliderFirst"/>
                <div class="validate" v-if="!isValid">
                    <RippleButton :clickAction="() => validate(false)" name="Valider"></RippleButton>
                </div>
            </slide>
            <slide class="slider__slide">
                <img class="slider__image" :src="sliderFive"/>
                <div class="validate" v-if="!isValid">
                    <RippleButton :clickAction="() => validate(true)" name="Valider"></RippleButton>
                </div>
            </slide>
            <slide class="slider__slide">
                <img class="slider__image" :src="sliderFour"/>
                <div class="validate" v-if="!isValid">
                    <RippleButton :clickAction="() => validate(false)" name="Valider"></RippleButton>
                </div>
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
    import Indicator from '@/components/traps/Indicator';
    import RippleButton from '@/components/UI/RippleButton';

    export default {
        name: "Slider",
        components: {Carousel, Slide, Comment, Harassment, SliderFirst,
        SliderSecond, SliderThree, SliderFour, SliderFive, Indicator, RippleButton},
        data: () => ({
            harassment: Harassment,
            sliderFirst: SliderFirst,
            sliderSecond: SliderSecond,
            sliderThree: SliderThree,
            sliderFour: SliderFour,
            sliderFive: SliderFive,
            points: 0,
        }),
        computed: {
            isValid: {
                get: function () {
                    return this.$store.state.validTrap.slider;
                },
                set: function (val) {
                    this.$store.state.validTrap.slider = val;
                    this.$store.dispatch('checkValidateAll');
                }
            }
        },
        methods: {
            validate(isValid) {
                this.isValid = true;
                this.$store.dispatch('updateAchievement', {type: 'points', amount: 20});
                //todo slider api
                this.$store.dispatch('updateSlider', {amount: this.points, valid: true});
            }
        },
    }
</script>

<style scoped lang="scss">
    .validate {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 20px;
        margin: auto;
        text-align: center;
    }
    .slider {
        &__container {
            position: relative;
            margin-top: 32px;
            background: $white;
            margin-bottom: 50px;
            border-radius: 10px;
            .VueCarousel-dot-container {
                margin: 0;
            }
        }
        &__slide {
            position: relative;
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
