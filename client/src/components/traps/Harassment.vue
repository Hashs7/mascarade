<template>
    <div class="harassment__container">
        <img class="harassment__image" :src="harassment"/>
        <Informations name="Nathalie Bou" date="Il y a 4 jours"/>
        <div class="harassment__group">
            <h2 class="harassment__title"> Holidays in Miami 🌈🌴</h2>
            <div class="harassment__separate"></div>
            <Comment name="Bryan Philipo" date="Il y a 2h" description="Trop moche c'est quoi cette photo !"/>
            <Comment name="Lucie Bernard" date="Il y a 3 jours" description="Tu t'es prise pour un mannequin ou quoi ?"/>
            <Comment name="Ryan Zetyr" date="Il y a 5 jours" description="Grave tu fais trop ta belle !"/>
            <Comment
                    v-if="response.desc"
                    :name="response.name"
                    :date="response.date"
                    :description="response.desc"/>
            <div class="button__container">
            <div class="button__group">
                <RippleButton
                    v-for="(res, i) in choices"
                    :key="i"
                    :clickAction="() => updateShare(res.type, res.answer)"
                    :name="res.answer" />

                <RippleButton
                    :clickAction="updateReport"
                    name="Signaler">
                </RippleButton>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Informations from '@/components/traps/post/Informations';
    import Comment from '@/components/traps/post/Comment';
    import Harassment from '@/assets/img/harassment.jpg';
    import {getTime} from "../../store/modules/messages";
    import RippleButton from '@/components/UI/RippleButton';

    export default {
        name: "Harassment",
        components: { Informations, Comment, RippleButton },
        data: () => ({
            harassment: Harassment,
            response: {
                name: null,
                date: null,
                desc: null
            },
            choices: [{
                type: "negative",
                answer: "J'avoue trop moche !"
            },{
                type: "positive",
                answer: "Cool cette photo !"
            }]
        }),
        methods: {
            updateReport() {
                this.$store.dispatch('updateScene', {sceneType: 'harassment', action: 'reports'});
                this.$store.dispatch('updateAchievement', {type: 'reports', amount: 1});
            },
            updateShare(type, msg) {
                const {firstname, surname} = this.$store.state;
                this.response = {
                    name: firstname + ' ' + surname,
                    date: "à l'instant",
                    desc: msg
                };
                let pointAmount = type === 'negative' ? -1 : 1;
                this.$store.dispatch('updateScene', {sceneType: 'harassment', action: msg});
                this.$store.dispatch('updateAchievement', {type: 'points', amount: pointAmount});
            }
        },
    }
</script>

<style scoped lang="scss">
    .harassment {
        &__container {
            margin: 5rem 0;
            background: $white;
        }
        &__group {
            padding: 0 7rem 3.8rem 7rem;
        }
        &__image {
            width: 100%;
        }
        &__title {
            font-size: 1.6rem;
            margin-bottom: 2rem;
            margin-top: 1.8rem;
        }
        &__separate {
            height: 1px;
            background: grey;
            width: 46rem;
            margin-bottom: 1.7rem;
        }
    }
    .button {
      &__container {
        margin-top: 2rem;
        display: flex;
        justify-content: flex-end;
      }
    }
</style>
