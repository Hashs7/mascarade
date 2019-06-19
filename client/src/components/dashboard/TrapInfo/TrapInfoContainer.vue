<template>
    <div>
        <div
            class="trap-progress"
            v-for="(step, i) in steps"
            :key="i">
            <span class="trap__name">{{step.name}}</span>
            <span class="trap__number">{{step.number}}</span>
            <v-progress-linear v-model="step.progress"></v-progress-linear>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TrapInfoContainer",
        data: () => ({
            steps: [{
                name: 'Etape 1',
                progress: 0,
                number: 0
            },{
                name: 'Etape 2',
                progress: 0,
                number: 0
            },{
                name: 'Etape 3',
                progress: 0,
                number: 0
            }]
        })
    }
</script>

<style scoped>

</style>