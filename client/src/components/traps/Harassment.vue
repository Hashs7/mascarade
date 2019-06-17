<template>
    <div class="Harassment-container">
        <img class="Harassment-image" :src="harassment"/>
        <Informations name="Nathalie Bou" date="Il y a 4 jours"/>
        <div class="Harassment-group">
            <h2 class="Harassment-title"> Holidays in Miami 🌈🌴</h2>
            <div class="Harassment-separate"></div>
            <Comment name="Bryan Philipo" date="Il y a 2h" description="Trop moche c'est quoi cette photo !"/>
            <Comment name="Lucie Bernard" date="Il y a 3 jours" description="Grave je préférerai être morte qu’avoir ta tête !"/>
            <Comment
                    v-if="response.desc"
                    :name="response.name"
                    :date="response.date"
                    :description="response.desc"/>
            <div class="Button-container">
            <div class="Button-group">
                <button
                        v-for="(res,i) in choices"
                        :key="i"
                        class="Button-share"
                        type="button"
                        @click="updateShare(res.type, res.answer)">{{res.answer}}
                        <span></span><span></span><span></span><span></span></button>
                        
                <button
                        class="Button-report"
                        type="button"
                        @click="updateReport">Signaler
                        <span></span><span></span><span></span><span></span></button>
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

    export default {
        name: "Harassment",
        components: { Informations, Comment },
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
    .Harassment {
        &-container {
            margin: 5rem 0;
        }
        &-group {
            padding: 0 7rem 3.8rem 7rem;
        }
        &-image {
            width: 100%;
        }
        &-title {
            font-size: 1.6rem;
            margin-bottom: 2rem;
            margin-top: 1.8rem;
        }
        &-separate {
            height: 1px;
            background: grey;
            width: 46rem;
            margin-bottom: 1.7rem;
        }
    }
    .Button {
      &-container {
        margin-top: 2rem;
        display: flex;
        justify-content: flex-end;
      }

      &-share {
          margin-right: 1rem;
      }

      &-share, &-report { 
        border: 1px solid $violet;
        border-radius: 2.1rem;
        color: $violet;
        font-size: 1.4rem;
        padding: 1rem 1.3rem;
        position: relative;
        overflow: hidden;
        z-index: 1;
        transition: 0.5s;
        &:hover {
            color: $white;
        }
        span {
            position: absolute;
            width: 25%;
            height: 100%;
            background-color: $violet;
            transform: translateY(150%);
            border-radius: 50%;
            left: calc((var(--n) - 1) * 25%);
            transition: 0.4s;
            transition-delay: calc((var(--n) - 1) * 0.1s);
            z-index: -1;
        }
        &:hover span {
            transform: translateY(0) scale(2.8);
        }
        span:nth-child(1) {
            --n: 1;
        }
        span:nth-child(2) {
            --n: 2;
        }
        span:nth-child(3) {
            --n: 3;
        }
        span:nth-child(4) {
            --n: 4;
        }
      }
    }
</style>
