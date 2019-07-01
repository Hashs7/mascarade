<template>
    <div>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Student login</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-content>
            <div class="container">
                <StudentLogin />
            </div>
        </v-content>
    </div>
</template>

<script>
    import StudentLogin from '@/components/authentification/StudentLogin';

    export default {
        name: 'StudentLoginView',
        components: {
            StudentLogin
        }
    }
</script>

<style scoped lang="scss">
    .container {
        max-width: 400px;
        margin: 0 auto;
    }
</style>