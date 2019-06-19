<template>
    <div class="summary__container">
        <div class="summary__step">
            <img class="summary__circle" :src="circle"/>
        </div>
        <ul class="summary__datas">
            <li class="score">{{points}} point{{isPlurial('points')}}</li>
            <li class="share">{{shares}} partage{{isPlurial('shares')}}</li>
            <li class="report">{{reports}} signalement{{isPlurial('reports')}}</li>
            <li class="flash">{{currentFlash}} flash{{isPlurial('flashs')}}</li>
        </ul>
        <div class="summary__content">
            <h1>85 Wow !</h1>
            <p>Tu es un petit expert des réseaux sociaux ! Tu es extrêmement attentif aux contenus qui te sont présentés. Nous ne pouvons que t'encourager à continuer d'avoir cette démarche positive sur internet :)</p>
        </div>
    </div>
</template>

<script>
    import Circle from '@/assets/img/circle.png';
    export default {
        name: 'StudentSummary',
        components: {
        },
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
            align-items: center;
            height: 100%;
            background: $white;
        }
        &__content {
            position: relative;
            &:after {
                content: "";
                background-color: $violet;
                width: 470px;
                height: 39rem;
                color: $white;
                position: absolute;
                border-radius: 0.8rem;
                transform: rotate(-19deg);
                top: -18rem;
            }
            h1, p {
                color: $white;
                position: absolute;
                z-index: 2;  
                left: 8rem;
                top: -8rem;
            }
            h1 {
                width: 20rem;
            }
            p {
                width: 30rem;
                margin-top: 5rem;
            }
        }
        &__datas {
            color: $blue;
            font-size: 2.2rem;
            margin-right: 8rem;
            margin-left: 4rem;
            li {
                margin-top: 7rem;
                border-bottom: 1px solid $blue;
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
            position: relative;
            display: flex;
            align-items: center;
        }
    }
</style>