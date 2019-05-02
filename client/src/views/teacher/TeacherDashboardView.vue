<template>
    <div>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Teacher dashboard</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-content>
            <Navigation />
            <div class="content">
                <p>Bienvenue sur le dashboard</p>

                <NewSession />
                <SessionTabs />
            </div>
        </v-content>
    </div>
</template>

<script>
    import NewSession from '@/components/dashboard/NewSession';
    import Navigation from '@/components/dashboard/Navigation';
    import TableStudent from '@/components/dashboard/TableStudent';
    import SessionTabs from '@/components/dashboard/SessionTabs';

    export default {
        name: 'TeacherDashboard',
        components: {
            TableStudent,
            Navigation,
            SessionTabs,
            NewSession
        },
        data: () => ({
            valid: true,
            sessionCreated: false,
            className: '',
            linkToShare: ''
        }),
        methods: {

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
