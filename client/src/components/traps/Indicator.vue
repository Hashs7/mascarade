<template>
    <div class="indicator"
         :class="{
            valid: type === 'valid',
            invalid: type === 'invalid'}">
        <div class="circle-container">
            <div class="circle-out"></div>
            <div class="circle-in">
                <span class="score" v-if="score">{{score}}
                    <Score />
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import Score from '@/assets/score_moon.svg';

    export default {
        name: "Indicator",
        props: ['type', 'score'],
        components: { Score }
    }
</script>

<style scoped lang="scss">
    .indicator {
        position: absolute;
        top: 250px;
        left: -232px;
        width: 70px;
        height: 70px;
        &.valid {
            .circle-in {
                transform: scale(1);
                background-color: $medium--blue;
            }
            .circle-out {
                border-color: $medium--blue;
                transform: scale(1.3);
            }
        }
    }
    .circle-container {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .circle-in {
        position: relative;
        display: flex;
        z-index: 2;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        transform: scale(.6);
        border: 4px solid $medium--blue;
        background-color: $violet;
        transition: background-color .3s ease, transform .2s ease;
    }
    .circle-out {
        z-index: 1;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: $violet;
        border: 2px solid $medium--blue;
        border-radius: 100%;
        transform: scale(0.5);
        transition: all .3s ease .2s;
    }
    .score {
        margin: auto;
        color: white;
        font-size: 20px;
        svg {
            position: relative;
            top: 1px;
        }
    }
</style>