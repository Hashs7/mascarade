<template>
    <div class="progress-card">
        <p>{{label}}</p>
        <v-progress-circular
                :rotate="-90"
                :size="100"
                :width="10"
                :value="pourcent"
                color="primary"
        >
            {{ value }}
        </v-progress-circular>
    </div>
</template>

<script>
    export default {
        name: "ProgressCard",
        props: ['label', 'value', 'pourcent']
    }
</script>

<style scoped>
    .progress-card {
        margin: 20px;
        padding: 10px 20px;
        display: inline-block;
        border: 1px solid gray;
        border-radius: 10px;
    }
</style>