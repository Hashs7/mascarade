<template>
    <div class="indicator"
         :class="{
            valid: type === 'valid',
            invalid: type === 'invalid'}">
        <div class="circle-container">
            <div class="circle-out"></div>
            <div class="circle-in"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Indicator",
        props: ['type'],

    }
</script>

<style scoped lang="scss">
    .indicator {
        position: absolute;
        top: 0;
        bottom: 0;
        left: -231px;
        margin: auto;
        width: 70px;
        height: 70px;
        &.valid {
            .circle-in {
                background-color: $violet;
            }
            .circle-out {
                border-color: $violet;
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
        z-index: 2;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        background-color: $grey;
        transition: background-color .3s ease;
    }
    .circle-out {
        z-index: 1;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border: 4px solid $grey;
        border-radius: 100%;
        transform: scale(0.8);
        transition: all .3s ease .2s;
    }
</style>