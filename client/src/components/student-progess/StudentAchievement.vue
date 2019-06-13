<template>
    <div class="achievements">
        <div class="achievements-container">
            <Logo />
            <ul class="achievements-title">
                <li>Sarah</li>
                <li>dupont</li>
            </ul>
            <ul class="achievements-datas">
                <li class="score">{{points}} point{{isPlurial('points')}}</li>
                <li class="share">{{shares}} partage{{isPlurial('shares')}}</li>
                <li class="report">{{reports}} signalement{{isPlurial('reports')}}</li>
            </ul>
        </div>
        <div class="progress">

        </div>
    </div>
</template>

<script>
    import Logo from '@/assets/logo.svg';
    export default {
        name: "StudentAchievement",
        components: { Logo },
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
            isPlurial() {
                return type => this.$store.state.score[type] > 1 ? 's' : null;
            }
        }
    }
</script>

<style scoped lang="scss">
    .achievements {
        width: 100%;
        height: 100%;
        background-color: $black;
        color: white;
        &-container {
            display: flex;
            flex-direction: column;
            position: fixed;
            svg {
                margin-top: 5rem;
                margin-left: 3rem;
                text-align: center;
            }
            ul {
                display: block;
                padding-left: 5rem;
            }
        }
        &-title {
            margin-top: 10rem;
            margin-bottom: 19rem;
            color: $white;
            font-size: 2.6rem;
            line-height: 3.1rem;
            li:last-child {
                text-transform: uppercase;
            }
        }
        &-datas {
            font-size: 1.6rem;
            line-height: 2.7rem;
            font-weight: bold;
            li {
                border-bottom: 1px solid white;
                width: 11.5rem;
                margin-bottom: 2.2rem;
            }
        }
    }
</style>