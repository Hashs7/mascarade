<template>
    <div class="trap-container">
        <div class="trap-progress">
            <span class="trap__name">{{trapCharity.name}}</span>
            <span class="trap__number">Élèves qui ont réussi: {{trapCharity.number}}</span>
            <v-progress-linear height="12" v-model="pourcentCharity"></v-progress-linear>
        </div>
        <div class="trap-progress">
            <span class="trap__name">{{trapFakeNews.name}}</span>
            <span class="trap__number">Élèves qui ont réussi: {{trapFakeNews.number}}</span>
            <v-progress-linear height="12" v-model="pourcentFakeNews"></v-progress-linear>
        </div>
        <div class="trap-progress">
            <span class="trap__name">{{trapHarassment.name}}</span>
            <span class="trap__number">Élèves qui ont réussi: {{trapHarassment.number}}</span>
            <v-progress-linear height="12" v-model="pourcentHarassment"></v-progress-linear>
        </div><!--
        <div class="trap-progress">
            <span class="trap__name">{{trapSlider.name}}</span>
            <span class="trap__number">Élèves qui ont réussi: {{trapSlider.number}}</span>
            <v-progress-linear height="12" v-model="pourcentSlider"></v-progress-linear>
        </div>-->
        <div class="trap-progress">
            <span class="trap__name">{{trapQuizz.name}}</span>
            <span class="trap__number">Élèves qui ont réussi: {{trapQuizz.number}}</span>
            <v-progress-linear height="12" v-model="pourcentQuizz"></v-progress-linear>
        </div>
        <div class="trap-progress">
            <span class="trap__name">{{trapDialogCelebrity.name}}</span>
            <span class="trap__number">Élèves qui ont réussi: {{trapDialogCelebrity.number}}</span>
            <v-progress-linear height="12" v-model="pourcentDialogCelebrity"></v-progress-linear>
        </div>
        <div class="trap-progress">
            <span class="trap__name">{{trapDialogHacker.name}}</span>
            <span class="trap__number">Élèves qui ont réussi: {{trapDialogHacker.number}}</span>
            <v-progress-linear height="12" v-model="pourcentDialogHacker"></v-progress-linear>
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

<style scoped lang='scss'>
    .trap-container {
        display: flex;
        flex-wrap: wrap;
    }
    .trap-progress {
        width: calc(25% - 24px);
        font-size: 14px;
        min-height: 144px;
        margin: 12px;
        padding: 17px 30px 30px 30px;
        border-radius: 0.6rem;
        background-color: white;
        box-shadow: 0px 2px 5px -4px rgba(0,0,0,0.75);
        &:first-child, &:nth-child(4n + 1) {
            margin-left: 0;
        }
    }
    .trap__number {
        display: block;
        margin-bottom: 30px;
    }
    .v-progress-linear {
        border-radius: 7px;
    }
</style>