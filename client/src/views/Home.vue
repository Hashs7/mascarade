<template>
    <div>
        <v-toolbar app>
            <v-toolbar-title class="headline text-uppercase">
                <span>Home page</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-content>
            <div class="home-links">
                <router-link to="teacher/signup">Signup as teacher</router-link>
                <br>
                <router-link to="teacher/login">Login as teacher</router-link>
                <br>
                <router-link to="student/signup/randomRoomId">Signup as student</router-link>
                <br>

                <!--Route temporaire-->
                <router-link to="student/login">Login as student</router-link>
            </div>
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

<style>
    .v-content__wrap {
        justify-content: center;
    }
    .home-links {
        display: block;
    }
</style>
