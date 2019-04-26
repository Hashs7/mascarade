<template>
    <div>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Student signup</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-content>
            <div class="container">
                <StudenFrom />
            </div>
        </v-content>
    </div>
</template>

<script>
    import StudenFrom from '@/components/StudentForm';

    export default {
        name: 'StudentSignup',
        components: {
            StudenFrom
        }
    }
</script>

<style scoped lang="scss">
    .container {
        max-width: 400px;
    }
</style>
