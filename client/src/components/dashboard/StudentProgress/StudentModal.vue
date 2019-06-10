<template>
    <v-dialog
            v-model="modalVisible"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            scrollable
    >
        <v-card tile>
            <v-toolbar card dark color="primary">

                <v-toolbar-title>{{name}}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon dark @click="closeModal">
                    <v-icon>close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card-text>
                <v-list three-line subheader>
                    <v-subheader>Données globales sur l'élève</v-subheader>
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>Scores</v-list-tile-title>
                            <v-list-tile-sub-title>Points: {{achievements.points}} - Partages: {{achievements.shares}} - Signalements: {{achievements.reports}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
                <v-list three-line subheader>
                    <v-subheader>Réponses de l'élève</v-subheader>
                    <v-list-tile>
                        <v-list-tile-content v-if="charity.type">
                            <v-list-tile-title>Cause partagée : {{charity.type}}</v-list-tile-title>
                            <v-list-tile-sub-title>{{charity.title}}</v-list-tile-sub-title>
                            <v-list-tile-sub-title>{{charity.description}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>

                </v-list>
                <v-divider></v-divider>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    // TODO connect to store

    export default {
        name: "StudentModal",
        computed: {
            modalVisible() {
                console.log(this.$store.state.modalProgress);
                return this.$store.state.modalProgress.isVisible;
            },
            currentStudent() {
                return this.$store.state.modalProgress.currentStudent;
            },
            name() {
                return this.currentStudent.firstname + ' ' + this.currentStudent.surname;
            },
            charity() {
                return this.currentStudent.charity;
            },
            achievements() {
                return this.currentStudent.achievements;
            }

        },
        methods: {
            closeModal() {
                this.$store.commit('toggleModal', false)
            }
        }
    }
</script>

<style scoped>

</style>