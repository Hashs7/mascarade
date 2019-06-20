<template>
    <div class="dashboard-container">
        <header class="app-header">
            <div class="header__container">
                <div class="header__logo">
                <Logo />
                </div>
                <nav class="dashboard-nav">
                    <Navigation />
                </nav>
                <div class="session__info">
                    <p>{{currentSessions.className}}</p>
                    <p>{{currentSessions.students.length}}</p>
                    <img class="session__image" :src="connexion"/>
                </div>
            </div>
        </header>
        <v-content>
            <div class="session__list">
                <SessionList />
            </div>
            <div class="session__view">
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
    import Logo from '@/assets/logo.svg';
    import Connexion from '@/assets/img/connexion.png';
    import {mapGetters} from "vuex";

    export default {
        name: 'TeacherDashboard',
        components: {
            TableStudent,
            Navigation,
            SessionList,
            Home,
            Board,
            AllStudents, 
            Logo
        },
        data: () => ({
            connexion: Connexion,
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
    .dashboard-container {
        height: 100%;
    }
    .header {
        &__container {
            display: flex;
            max-width: 1200px;
            margin: auto;
        }
        &__logo {
            margin-right: 4rem;
        }
    }
    .app-header {
        height: 90px;
        display: flex;
        align-items: center;
        background: $gradient;
        position: relative;
    }
    .v-content__wrap {
        display: flex;
    }
    .session {
        &__list {
            width: 180px;
            background-color: $white;
            position: fixed;
            left: 0;
            height: 100%;
        }
        &__view {
            width: calc(100% - 250px);
        }
        &__info {
            display: flex;
            align-items: center;
            p {
                margin-bottom: 0;
                font-size: 1.6rem;
                color: $white;
                &:first-child {
                    margin-right: 2rem;
                }
            }
        }
        &__image {
            width: 3rem;
            margin-left: 0.5rem;
        }
    }
    .content {
        flex-grow: 1;
        padding: 45px 90px;
        padding-right: 0;
    }
</style>
