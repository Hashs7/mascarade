<template>
    <div class="Harassment-container">
        <img class="Harassment-image" :src="harassment"/>
        <div class="Harassment-group">
            <h2 class="Harassment-title"> Holidays in Miami 🌈🌴</h2>
            <div class="Harassment-separate"></div>
            <!--<Informations name="Publié par Dylan" like="23" comment="82" date="Il y a 5 heures" />-->
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
                        @click="updateShare(res.type, res.answer)">{{res.answer}}</button>
                <button
                        class="Button-report"
                        type="button"
                        @click="updateReport">Signaler</button>
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
            border: 1.5px solid $white;
            margin: 50px 0;
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
            margin-top: 4.8rem;
        }
        &-separate {
            height: 1px;
            background: grey;
            width: 46rem;
            margin-bottom: 1.7rem;
        }
    }
    .Informations-container {
      margin-bottom: 1rem;
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
        box-shadow: 0px 0px 20px $yellow;
        border-radius: 0.6rem;
        color: $yellow;
        font-size: 1.4rem;
        padding: 1rem 1.3rem;
      }
    }
</style>
