<template>
    <div class="achievements">
        <div class="general-achievements">
            <span class="score">{{points}} point{{isPlurial('points')}}</span>
            <span class="share">{{shares}} partage{{isPlurial('shares')}}</span>
            <span class="report">{{reports}} signalement{{isPlurial('reports')}}</span>
        </div>
        <div class="progress">

        </div>
    </div>
</template>

<script>
    export default {
        name: "StudentAchievement",
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
                return type => this.$store.state.score[type] !== 0 ? 's' : null;
            }
        }
    }
</script>

<style scoped lang="scss">
    .achievements {
        width: 100%;
        height: 100%;
        background-color: #43425D;
        color: white;
    }
    .general-achievements {
        text-align: center;
        span {
            display: block;
        }
    }
</style>