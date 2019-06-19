<template>
    <div class="session-time-container">
        <span class="label-time">{{name}}</span>
        <v-progress-circular
                :rotate="-90"
                :size="100"
                :width="4"
                :value="timeValue"
                color="primary"
        >
            {{ time }}
        </v-progress-circular>
    </div>
</template>

<script>
    export default {
        name: "SessionTimeContainer",
        props: ['name', 'time', 'timeValue']
    }
</script>

<style scoped>
    .session-time-container {
        display: inline-block;
        width: 190px;
        margin: 12px;
        background-color: white;
    }
    .label-time {
        display: block;
    }
</style>