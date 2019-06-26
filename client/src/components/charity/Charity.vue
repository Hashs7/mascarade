<template>
    <div class="charity__container">
        <Indicator :type="isValid ? 'valid' : 'invalid'"/>

        <div class="img__container">
            <div class="img__select"
                 v-for="(img, i) in images"
                 :style="`background-image: url(${img.src})`"
                 :class="{selected: img.selected}"
                 :title="img.title"
                 @click="selectImg(i)"
                 >
                <div class="charity__titleImage">{{img.title}}</div>
                <div class="indicator-img"></div>
            </div>
        </div>
        <div class="content__group">
            <p class="content__title">Rejoins une cause ! </p>
            <div class="content__separate"></div>
        </div>
        <p class="charity__published">Ton article vient d'être publié</p>
        <form  class="charity__content" action="" autocomplete="off">
            <input
                    v-model="title"
                    type="text"
                    class="student-response charity__title"
                    name="title"
                    placeholder="Ajoute un titre">
            <textarea
                    v-model="description"
                    class="student-response charity__description"
                    name="description"
                    placeholder="Ajoute une description (minimum 50 mots)"></textarea>
            <div class="button__container">
                <div class="button__group">
                    <RippleButton :clickAction="shareCharity" name="Partager"></RippleButton>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import Pollution from '@/assets/img/charity/pollution.jpg'
    import Homophobie from '@/assets/img/charity/homophobie.jpg'
    import Racism from '@/assets/img/charity/racism.jpg'
    import Starvation from '@/assets/img/charity/starvation.jpg'
    import Violences from '@/assets/img/charity/violences.jpg'
    import War from '@/assets/img/charity/war.jpg'
    import {updateCharity} from "../../utils/API";
    import RippleButton from '@/components/UI/RippleButton';
    import Indicator from '@/components/traps/Indicator';

    export default {
        name: "Charity",
        components: { RippleButton, Indicator },
        data: () => ({
            title: null,
            description: null,
            images: [{
                src: Starvation,
                type: 'starvation',
                title: 'Faim dans le monde',
                selected: false
            },{
                src: Violences,
                type: 'violences',
                title: 'Violences',
                selected: false
            },{
                src: War,
                type: 'war',
                title: "Guerre",
                selected: false
            },{
                src: Racism,
                type: 'racism',
                title: "Racisme",
                selected: false
            },{
                src: Homophobie,
                type: 'homophobie',
                title: "Homophobie",
                selected: false
            },{
                src: Pollution,
                type: 'pollution',
                title: "Pollution",
                selected: false
            }]
        }),
        computed: {
            isValid: {
                get: function () {
                    return this.$store.state.validTrap.charity;
                },
                set: function (val) {
                    this.$store.state.validTrap.charity = val;
                    this.$store.dispatch('checkValidateAll');
                }
            }
        },
        methods: {
            selectImg(index) {
                this.images.map(img => img.selected = false);
                this.images[index].selected = true;
            },
            shareCharity() {
                this.isValid = true;

                const {studentId, sessionId} = this.$store.state;
                const charity = this.images.find(el => el.selected);

                //TODO validatation champs non vide
                updateCharity(studentId,sessionId, charity.type, this.title, this.description)
                    .then(res => {
                        this.$store.dispatch('updateAchievement', {type: 'shares', amount: 1});
                        this.$store.dispatch('updateAchievement', {type: 'points', amount: 10});
                    })
                    .catch(err => console.log(err));
                /*var published = document.body.querySelector('.charity-published');
                published.classList.toggle("visible");*/
            }
        }
    }
</script>

<style scoped lang="scss">
    .charity {
        &__container {
            position: relative;
            margin: 50px 0;
            background: $white;
            border-radius: 10px;
        }
        &__title, &__description {
            display: block;
            color: $violet;
            border: 1px solid $violet;
            border-radius: 1rem;
            padding: 2rem;
            margin-bottom: 2rem;
            font-size: 1.4rem;
        }
        &__titleImage {
            opacity: 0;
            background-color: $violet;
            color : $white;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &__content {
            padding: 0 7rem 3.8rem 7rem;
            margin-top: 3rem;
        }
        &__published {
            display: none;
            font-size: 1.4rem;
            &.visible {
                display: flex;
                justify-content: center;
            }
        }

    }
    .content {
        &__title {
            font-weight: bold;
            font-size: 2rem;
            line-height: 2.8rem;
            text-transform: uppercase;
            margin-top: 1.3rem;
            max-width: 85%;
        }
        &__separate {
            margin-top: 2rem;
            margin-bottom: 2rem;
            background: $black;
            height: 2px;
            width: 3rem;
        }
        &__group {
            padding: 0 7rem 0 7rem;
            margin-top: 4.5rem;
        }
    }
    .img__container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .img__select {
        position: relative;
        cursor: pointer;
        width: calc(100% / 3);
        height: 120px;
        background-size: cover;
        background-position: center;
        &.selected .indicator-img{
            opacity: 1;  
            height: 100%;
            border: 4px solid $violet;
        }
        &.selected {
            .charity__titleImage {
                display: none;
            }
        }
        &:hover {
            .charity__titleImage {
                opacity: 0.8;
            }
        }
        &:first-child {
            border-top-left-radius: 10px;
            .indicator, .charity__titleImage {
                border-top-left-radius: 10px;
            }
        }
        &:nth-child(3) {
            border-top-right-radius: 10px;
            .indicator, .charity__titleImage {
                border-top-right-radius: 10px;
            }
        }
    }
    .indicator-img {
        opacity: 0;
        text-align: center;
    }

    .student-response {
        max-width: 100%;
        min-width: 100%;
        min-height: 40px;
    }
    .button {
      &__container {
        margin-top: 2rem;  
        display: flex;
        justify-content: flex-end;
      }
    }
</style>