<template>
    <div class="step-container">
        <div class="indications">
            <h2 class="indications-title">{{indications[this.step-1].title}}</h2>
            <p class="indications-content">{{indications[this.step-1].content}}</p>
            <p class="indications-content">{{indications[this.step-1].contentSecond}}</p>
        </div>

        <v-stepper v-model="step" vertical >
            <v-stepper-step :complete="step > 1" step="1">
                Étape 1
                <small>Summarize if needed</small>
            </v-stepper-step>

            <v-stepper-content step="1">
            </v-stepper-content>

            <v-stepper-step :complete="step > 2" step="2">Etape 2</v-stepper-step>

            <v-stepper-content step="2">
            </v-stepper-content>

            <v-stepper-step :complete="step > 3" step="3">Etape 3</v-stepper-step>

            <v-stepper-content step="3">
            </v-stepper-content>
        </v-stepper>

        <v-btn v-if="step !== 1" flat @click="previousStep">Retour</v-btn>
        <v-btn color="primary" @click="nextStep">Suivant</v-btn>
    </div>

</template>

<script>
    export default {
        name: "TutoProgress",
        data: () => ({
            step: 1,
            indications: [{
                title: "Bienvenue sur Mascarade",
                content: "Cette expérience a pour but de te faire découvrir les réseaux sociaux.",
                contentSecond: "Promène toi dans la plateforme et intéragis avec les éléments.",
            },{
                title: "Comment évoluer ?",
                content: "Tu vas être confronté à différentes étapes, durant lesquelles il faudra que tu réagisses pour passer à la suite.",
                contentSecond: "Les bons choix te rapporteront des points, mais attention ils ne sont pas forcément ceux que l’on croit !",
            },{
                title: "Si tu as besoin d’aide, pas de panique !",
                content: "Clique sur le bouton aide en haut à droite de l’écran.",
                contentSecond: "Tu pourras regarder des tutoriels ou alors appeler l’animateur. ",
            }]
        }),
        computed: {
            indexTxt: function() {
                return this.step--;
            }
        },
        methods: {
            nextStep() {
                if(this.step < 3) {
                    this.step++;
                } else {
                    this.$router.push('/student/exp')
                }
            },
            previousStep() {
                if(this.step === 1) return;
                this.step--;
            }
        }
    }
</script>

<style>
    .step-container {
        max-width: 450px;
        height: 100%;
        background-color: #fff;
    }
    .indications {
        padding-top: 60px;
        margin: 0 40px;
    }
    .v-stepper {
        box-shadow: none;
    }
</style>