<template>
    <div class="trap-container">
        <div class="trap-progress">
            <span class="trap__name">{{trapCharity.name}}</span>
            <span class="trap__number">Élèves qui ont réussi: {{trapCharity.number}}</span>
            <v-progress-linear v-model="pourcentCharity"></v-progress-linear>
        </div>
        <div class="trap-progress">
            <span class="trap__name">{{trapFakeNews.name}}</span>
            <span class="trap__number">Élèves qui ont réussi: {{trapFakeNews.number}}</span>
            <v-progress-linear v-model="pourcentFakeNews"></v-progress-linear>
        </div>
        <div class="trap-progress">
            <span class="trap__name">{{trapHarassment.name}}</span>
            <span class="trap__number">Élèves qui ont réussi: {{trapHarassment.number}}</span>
            <v-progress-linear v-model="pourcentHarassment"></v-progress-linear>
        </div>
        <div class="trap-progress">
            <span class="trap__name">{{trapSlider.name}}</span>
            <span class="trap__number">Élèves qui ont réussi: {{trapSlider.number}}</span>
            <v-progress-linear v-model="pourcentSlider"></v-progress-linear>
        </div>
        <div class="trap-progress">
            <span class="trap__name">{{trapQuizz.name}}</span>
            <span class="trap__number">Élèves qui ont réussi: {{trapQuizz.number}}</span>
            <v-progress-linear v-model="pourcentQuizz"></v-progress-linear>
        </div>
        <div class="trap-progress">
            <span class="trap__name">{{trapDialogCelebrity.name}}</span>
            <span class="trap__number">Élèves qui ont réussi: {{trapDialogCelebrity.number}}</span>
            <v-progress-linear v-model="pourcentDialogCelebrity"></v-progress-linear>
        </div>
        <div class="trap-progress">
            <span class="trap__name">{{trapDialogHacker.name}}</span>
            <span class="trap__number">Élèves qui ont réussi: {{trapDialogHacker.number}}</span>
            <v-progress-linear v-model="pourcentDialogHacker"></v-progress-linear>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "TrapInfoContainer",
        computed: {
            ...mapGetters([
                'currentSessions',
                'trapCharity',
                'trapFakeNews',
                'trapHarassment',
                'trapSlider',
                'trapQuizz',
                'trapDialogCelebrity',
                'trapDialogHacker'
            ]),
            pourcentCharity() {
                return (this.trapCharity.number / this.currentSessions.students.length) * 100;
            },
            pourcentFakeNews() {
                return (this.trapFakeNews.number / this.currentSessions.students.length) * 100;
            },
            pourcentHarassment() {
                return (this.trapHarassment.number / this.currentSessions.students.length) * 100;
            },
            pourcentSlider() {
                return (this.trapSlider.number / this.currentSessions.students.length) * 100;
            },
            pourcentQuizz() {
                return (this.trapQuizz.number / this.currentSessions.students.length) * 100;
            },
            pourcentDialogCelebrity() {
                return (this.trapDialogCelebrity.number / this.currentSessions.students.length) * 100;
            },
            pourcentDialogHacker() {
                return (this.trapDialogHacker.number / this.currentSessions.students.length) * 100;
            }
        }
    }
</script>

<style scoped>
    .trap-container {
        display: flex;
        flex-wrap: wrap;
    }
    .trap-progress {
        padding: 8px;
        width: calc(25% - 24px);
        background-color: white;
        margin: 12px;
        min-height: 144px;
    }
    .trap__number {
        display: block;
    }
</style>