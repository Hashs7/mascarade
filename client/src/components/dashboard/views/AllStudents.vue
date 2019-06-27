<template>
    <div class="students__container">
        <StudentModal/>

        <div class="students__row"> 
            <h2 v-if="!currentSessions.students.length">Aucun élève n'est inscrit à cette session</h2>

            <div
                v-for="(student, i) in currentSessions.students"
                :key="i" class="students__card">
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

<style scoped lang="scss">
    .students {
        &__row {
            display: flex;
            flex-wrap: wrap;
        }
        &__card {
            width: calc(25% - 24px);
            font-size: 14px;
            min-height: 144px;
            margin: 12px;
            padding: 16px 24px;
            border-radius: 0.6rem;
            background-color: $white;
            box-shadow: 0px 2px 5px -4px rgba(0, 0, 0, 0.75);
            &:first-child, &:nth-child(5) {
                margin-left: 0;
            }
        }
    }
</style>