<template>
    <div class="Message" :class="{student: msgType === 'student'}">
        <span class="Message-content typeLink" v-if="typeLink">{{txt}}</span>
        <span class="Message-content" v-else >{{txt}}</span>
        <span class="Message-time">{{time}}</span>
    </div>
</template>

<script>
    export default {
        name: "Message",
        props: ['txt', 'time', 'msgType', 'link', 'typeLink'],
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
                background-color: $orange;
                font-size: 1.4rem;
                color: $white;
            }
        }
        &-content {
            display: inline-block;
            padding: 1rem 1.4rem;
            border-radius: 3rem 3rem 3rem 0;
            background-color: $light--blue;
            color: $black;
            font-size: 1.4rem;
            &.typeLink:hover {
                text-decoration: underline;
            }
        }
        &-time {
            margin-top: 0.2rem;
            display: block;
            font-size: 1.1rem;
            opacity: 0.8;
        }
    }
</style>