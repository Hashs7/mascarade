<template>
    <div class="summary__container">
        <div class="summary__content">
            <div class="summary__left">
                <div class="summary__step">
                    <img class="summary__circle" :src="circle"/>
                </div>
                <div class="summary__score">
                    <div class="summary__number">
                        <h1 class="summary__points">{{points}}</h1>
                        <Points />
                    </div>
                    <ul class="summary__datas">
                        <li class="share">{{shares}} partage{{isPlurial('shares')}}</li>
                        <li class="report">{{reports}} signalement{{isPlurial('reports')}}</li>
                        <li class="flash">{{currentFlash}} flash{{isPlurial('flashs')}}</li>
                    </ul>
                </div>
            </div>
            <div class="summary__description">
                <h1>Wow !</h1>
                <p>Tu es un vrai expert des réseaux sociaux ! 
                Tu as l’oeil partout, on ne peut rien te cacher. 
                Tel un vrai détective privé tu as décelé tous les pièges, rien ne te résistes. Tu te sers d’internet de la bonne manière, continues comme ça ! :) </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Circle from '@/assets/img/circle.png';
    import Points from '@/assets/score.svg';
    export default {
        name: 'StudentSummary',
        components: { Points },
        data: () => ({
            circle: Circle,
        }),
        computed: {
            points() {
                return this.$store.state.score.points;
            },
            shares() {
                return this.$store.state.score.shares;
            },
            reports() {
                return this.$store.state.score.reports;
            },
            currentFlash() {
                return this.$store.state.flash.currentFlash;
            },
            isPlurial() {
                return type => this.$store.state.score[type] > 1 ? 's' : null;
            }
        }
    }
</script>

<style scoped lang="scss">
    .summary {
        &__container {
            display: flex;
            justify-content: flex-start;
            align-items: flex-end;
            height: 100vh;
            background-size: cover;
            background-image: url('~@/assets/img/summary.png'), $gradient--background;
        }
        &__number {
            display: flex;
            align-items: center;
            margin-left: 4rem;
            h1 {
                margin-right: 20px;
            }
        }
        &__left {
            display: flex;
            align-items: flex-end;
        }
        &__content {
            display: flex;
            align-items: flex-end;
            margin-bottom: 80px;
        }
        &__description {
            h1, p {
                color: $white;
            }
            h1 {
                font-size: 120px;
                transform: rotate(-14deg);
            }
            p {
                width: 30rem;
                margin-top: 7rem;
            }
        }
        &__points {
            color: $white;
            font-size: 240px;
            font-weight: bold;
        }
        &__datas {
            color: $white;
            font-size: 2.2rem;
            margin-right: 16rem;
            margin-left: 4rem;
            li {
                margin-top: 7rem;
                border-bottom: 1px solid $white;
                width: 18rem;
                position: relative;
                &:first-child {
                    margin-top: 0;
                }
                &:after { 
                    content: "\26AC";
                    position: absolute;
                    right: -1.5rem;
                    margin-top: 1.5rem;
                }  
            }
        }
        &__step {
            display: flex;
            align-items: center;
            margin-bottom: 7rem;
        }
    }
</style>