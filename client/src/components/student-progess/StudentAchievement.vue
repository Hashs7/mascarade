<template>
    <div class="achievements">
        <div class="general-achievements">
            <span class="score">0 points</span>
            <span class="share">0 partages</span>
            <span class="report">0 signalements</span>
        </div>
        <div class="progress">

        </div>
    </div>
</template>

<script>
    export default {
        name: "StudentAchievement"
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