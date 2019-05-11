<template>
    <div>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Teacher dashboard</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-content>
            <Navigation />
            <div v-if="viewId === 'home'" class="content home">
                <Home></Home>
            </div>
            <div v-else-if="viewId === 'board'" class="content board">
                <p>Board</p>
            </div>
            <div v-else-if="viewId === 'student'" class="content student">
                <p>Elèves</p>
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

    export default {
        name: 'TeacherDashboard',
        components: {
            TableStudent,
            Navigation,
            Home
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
