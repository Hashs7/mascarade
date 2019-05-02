<template>
    <div>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Teacher signup</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-content>
            <div class="container">
                <TeacherForm />
            </div>
        </v-content>
    </div>
</template>

<script>
    import TeacherForm from '@/components/TeacherForm';

    export default {
        name: 'TeacherSignupView',
        components: {
          TeacherForm
        }
    }
</script>

<style scoped lang="scss">
    .container {
        max-width: 400px;
    }
</style>
