<template>
    <div>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Student signup</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-content>
            <div class="container">
                <StudentForm />
            </div>
        </v-content>
    </div>
</template>

<script>
    import StudentForm from '@/components/StudentForm';

    export default {
        name: 'StudentSignupView',
        components: {
            StudentForm
        }
    }
</script>

<style scoped lang="scss">
    .container {
        max-width: 400px;
    }
</style>
