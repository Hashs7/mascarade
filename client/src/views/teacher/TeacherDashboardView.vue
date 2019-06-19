<template>
    <div>
        <header class="app-header">
            <div class="logo">
                <p>logo</p>
            </div>
            <nav class="dashboard-nav">
                <Navigation />
            </nav>
            <div class="session-info">
                <p>{{currentSessions.className}}</p>
                <p>Online student {{currentSessions.students.length}}</p>
            </div>
        </header>
        <v-content>
            <div class="session-list">
                <SessionList />
            </div>
            <div class="session-view">
                <div v-if="viewId === 'home'" class="content board">
                    <Home />
                </div>
                <div v-if="viewId === 'board'" class="content board">
                    <Board />
                </div>
                <div v-else-if="viewId === 'student'" class="content student">
                    <AllStudents />
                </div>
            </div>
        </v-content>
    </div>
</template>

<script>
    import Navigation from '@/components/dashboard/Navigation';
    import TableStudent from '@/components/dashboard/TableStudent';
    import SessionList from '@/components/dashboard/SessionList';
    import Home from '@/components/dashboard/views/home';
    import Board from '@/components/dashboard/views/Board';
    import AllStudents from '@/components/dashboard/views/AllStudents';
    import {mapGetters} from "vuex";

    export default {
        name: 'TeacherDashboard',
        components: {
            TableStudent,
            Navigation,
            SessionList,
            Home,
            Board,
            AllStudents
        },
        data: () => ({
            valid: true,
            sessionCreated: false,
            className: '',
            linkToShare: ''
        }),
        sockets: {
            newConnection(data) {
                this.$store.commit('addStudent', data);
            },
            updateAchievement(data) {
                this.$store.commit('updateStudentAchievement', data);
            },
            updateCharity(data) {
                this.$store.commit('updateStudentCharity', data);
            },
            updateDialog(data) {
                this.$store.commit('updateStudentDialog', data);
            },
            updateScene(data) {
                this.$store.commit('updateBOScene', data);
            },
            updateQuizz(data) {
                this.$store.commit('updateQuizz', data);
            }
        },
        computed: {
            ...mapGetters([
                'currentSessions',
            ]),
            viewId() {
                return this.$store.state.dashboardView;
            }
        },
        mounted() {
            this.$store.state.dashboardView = "home";
        }
    }
</script>

<style lang="scss">
    .app-header {
        height: 100px;
        display: flex;
        align-items: center;
        background-color: blue;
    }
    .v-content {
        height: calc(100vh - 3px)
    }
    .v-content__wrap {
        display: flex;
    }
    .session-list {
        width: 180px;
        background-color: white;
    }
    .session-view {
        width: calc(100% - 180px);
    }
    .content {
        flex-grow: 1;
        padding: 20px;
    }
</style>
