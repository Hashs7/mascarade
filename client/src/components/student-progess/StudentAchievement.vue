<template>
    <div class="achievements">
        <div class="general-achievements">
            <span class="score">{{points}} points</span>
            <span class="share">{{shares}} partages</span>
            <span class="report">{{reports}} signalements</span>
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