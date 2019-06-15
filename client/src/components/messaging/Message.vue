<template>
    <div class="Message" :class="{student: msgType === 'student'}">
        <span class="Message-content">{{txt}}</span>
        <span class="Message-time">{{time}}</span>
    </div>
</template>

<script>
    export default {
        name: "Message",
        props: ['txt', 'time', 'msgType', 'link'],
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
    .Message {
        display: block;
        margin-bottom: 1rem;
        &.student {
            text-align: right;

            .Message-content {
                border-radius: 3rem 3rem 0 3rem;
                background-color: $light--blue;
                font-size: 1.4rem;
                color: $black;
            }
        }
        &-content {
            display: inline-block;
            padding: 0.8rem 1.2rem;
            border-radius: 3rem 3rem 3rem 0;
            background-color: $blue;
            color: $white;
            font-size: 1.4rem;
        }
        &-time {
            margin-top: 0.2rem;
            display: block;
            font-size: 1.1rem;
            opacity: 0.8;
        }
    }
</style>