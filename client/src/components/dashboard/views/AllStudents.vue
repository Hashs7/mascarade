<template>
    <div>
        <StudentModal/>

        <div>
            <h2 v-if="!currentSessions.students.length">Aucun élève n'est inscrit à cette session</h2>

            <div
                v-for="(student, i) in currentSessions.students"
                :key="i">
                <StudentCard
                        :id="student._id"
                        :firstname="student.firstname"
                        :surname="student.surname"
                        :points="student.achievements.points"
                        :shares="student.achievements.shares"
                        :reports="student.achievements.reports"
                />
            </div>

        </div>
    </div>
</template>

<script>
    import StudentCard from '@/components/dashboard/StudentProgress/StudentCard'
    import StudentModal from '@/components/dashboard/StudentProgress/StudentModal'
    import {mapGetters} from "vuex";

    export default {
        name: "AllStudents",
        components: {
            StudentCard,
            StudentModal
        },
        mounted() {
            if (!this.$store.state.sessions.length) return;
            //TODO get session
        },
        computed: {
            ...mapGetters([
                'currentSessions'
            ]),
        }
    }
</script>

<style scoped>

</style>