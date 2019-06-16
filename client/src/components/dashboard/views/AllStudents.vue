<template>
    <div v-if="currentSessions.length">
        <StudentModal />

        <v-tabs
                v-model="tabIndex"
                dark
                show-arrows
        >
            <v-tabs-slider color="blue"></v-tabs-slider>
            <v-tab
                    v-for="(session, i) in currentSessions"
                    :key="i"
                    :href="'#tab-' + i"
            >
                {{ session.className }}
            </v-tab>

            <v-tabs-items>
                <v-container grid-list-lg>

                    <v-tab-item
                            v-for="(session, j) in currentSessions"
                            :key="j"
                            :value="'tab-' + j"
                    >
                        <v-layout row wrap>
                            <h2 v-if="!session.students.length">Aucun élève n'est inscrit à cette session</h2>

                            <v-flex
                                    v-for="(student, l) in session.students"
                                    :key="l"
                                    md4
                            >
                                <StudentCard
                                        :id="student._id"
                                        :firstname="student.firstname"
                                        :surname="student.surname"
                                        :points="student.achievements.points"
                                        :shares="student.achievements.shares"
                                        :reports="student.achievements.reports"
                                />
                            </v-flex>
                        </v-layout>

                    </v-tab-item>
                </v-container>
            </v-tabs-items>
        </v-tabs>
    </div>
</template>

<script>
    import StudentCard from '@/components/dashboard/StudentProgress/StudentCard'
    import StudentModal from '@/components/dashboard/StudentProgress/StudentModal'

    export default {
        name: "AllStudents",
        components: {
            StudentCard,
            StudentModal
        },
        mounted() {
            if (!this.$store.state.sessions.length) return;
            console.log('TODO get seession');
        },
        sockets: {
            updateAchievement(data) {
                this.$store.commit('updateStudentAchievement', data);
            },
            updateCharity(data) {
                this.$store.commit('updateStudentCharity', data);
            },
            updateDialog(data) {
                console.log('trigger dialog');
                this.$store.commit('updateStudentDialog', data);
            },
            updateScene(data) {
                this.$store.commit('updateBOScene', data);
            }
        },
        computed: {
            tabIndex: {
                get() { return this.$store.state.tabIndex },
                set(value){ this.$store.commit("updateIndex", value );}
            },
            currentSessions() {
                return this.$store.state.sessions
            },
        }
    }
</script>

<style scoped>

</style>