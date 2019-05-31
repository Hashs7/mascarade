<template>
    <div>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Administrateur dashboard</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-content>
            <Navigation />
            <div v-if="viewId === 'board'" class="content board">
                <Home />
            </div>
            <div v-else-if="viewId === 'student'" class="content student">
                <AllStudents />
            </div>
            <div v-else-if="viewId === 'message'" class="content message">
                <p>Message</p>
            </div>
            <div v-else-if="viewId === 'help'" class="content help">
                <p>Help</p>
            </div>
            <div v-else-if="viewId === 'settings'" class="content settings">
                <p>Settings</p>
            </div>
        </v-content>
    </div>
</template>

<script>
    import Navigation from '@/components/dashboard/Navigation';
    import TableStudent from '@/components/dashboard/TableStudent';
    import Home from '@/components/dashboard/views/home';
    import AllStudents from '@/components/dashboard/views/AllStudents';

    export default {
        name: 'TeacherDashboard',
        components: {
            TableStudent,
            Navigation,
            Home,
            AllStudents
        },
        data: () => ({
            valid: true,
            sessionCreated: false,
            className: '',
            linkToShare: ''
        }),
        computed: {
            viewId() {
                return this.$store.state.dashboardView;
            }
        },
        mounted() {
            this.$store.state.dashboardView = "board";
        }
    }
</script>

<style lang="scss">
    .v-content {
        height: calc(100vh - 3px)
    }
    .v-content__wrap {
        display: flex;

    }
    .content {
        flex-grow: 1;
        padding: 20px;
    }
</style>
