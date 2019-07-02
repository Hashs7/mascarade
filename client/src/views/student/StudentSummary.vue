<template>
    <div class="summary__container">
        <div class="summary__content">
            <div class="summary__left">

                <div class="summary__score">
                    <div class="summary__number">
                        <h1 class="summary__points">{{points}}</h1>
                        <Points />
                    </div>
                </div>
            </div>
            <div class="summary__description">
                <h1>{{title}}</h1>
                <p>{{description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Circle from '@/assets/img/circle.png';
    import Points from '@/assets/score.svg';
    import {expert, low, medium} from "../../utils/summary";
    export default {
        name: 'StudentSummary',
        components: { Points },
        data: () => ({
            circle: Circle,
            title: null,
            description: null
        }),
        mounted() {
            if(this.points > 50) {
                this.title = expert.title;
                this.description = expert.description;
            }
            if(this.points > 20) {
                this.title = medium.title;
                this.description = medium.description;
            } else {
                this.title = low.title;
                this.description = low.description;
            }
        },
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
            position: relative;
            display: flex;
            justify-content: flex-start;
            align-items: flex-end;
            height: 100vh;
            background-size: cover;
            background-image: url('~@/assets/img/background_summary.png'), $gradient--background;
        }
        &__number {
            display: flex;
            align-items: center;
            h1 {
                margin-right: 20px;
            }
        }
        &__left {
            display: flex;
            align-items: flex-end;
            margin-right: 80px;
        }
        &__content {
            margin: auto;
            display: flex;
            align-items: center;
        }
        &__description {
            h1, p {
                color: $white;
            }
            h1 {
                font-size: 120px;
                font-family: $font-palanquin;
                font-weight: 500;
                transform: rotate(-14deg);
            }
            p {
                width: 32rem;
                margin-top: 7rem;
            }
        }
        &__points {
            color: $white;
            font-size: 240px;
            font-family: $font-palanquin;
            font-weight: 500;
            margin-bottom: 60px;
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
            position: absolute;
            left: 0;
            bottom: 30%;
            margin: auto;
            display: flex;
            align-items: center;
        }
    }
</style>