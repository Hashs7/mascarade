<template>
    <div>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Connexion Administrateur</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-content>
            <div class="container">
                <TeacherLogin />
            </div>
        </v-content>
    </div>
</template>

<script>
    import TeacherLogin from '@/components/authentification/TeacherLogin';

    export default {
        name: 'TeacherLoginView',
        components: {
            TeacherLogin
        }
    }
</script>

<style scoped lang="scss">
    .container {
        max-width: 400px;
        margin: 0 auto;
    }
</style>
