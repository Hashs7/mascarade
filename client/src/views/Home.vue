<template>
    <div>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Home page</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-content>
            <router-link to="teacher/login">Login as teacher</router-link>
            <br>
            <router-link to="student/signup">Signup as student</router-link>
            <br>

            <!--Route temporaire-->
            <router-link to="student/login">Login as student</router-link>
        </v-content>
    </div>
</template>

<script>

    export default {
        components: {},
        mounted() {
            localStorage.clear();
        }
    }
</script>
