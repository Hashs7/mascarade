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
        margin-bottom: 10px;
        &.student {
            text-align: right;

            .Message-content {
                border-radius: 30px 30px 0 30px;
                background-color: #0d47a1;
            }
        }
        &-content {
            display: inline-block;
            padding: 8px 12px;
            border-radius: 30px 30px 30px 0;
            background-color: #00e676;
        }
        &-time {
            margin-top: 2px;
            display: block;
        }
    }
</style>