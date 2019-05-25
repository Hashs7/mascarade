<template>
    <nav class="nav-scenes">
        <router-link class="item home" to="/student/exp">Accueil</router-link>
        <router-link class="item msg"to="/student/messages">Message</router-link>
        <span class="item help">Aide</span>
    </nav>
</template>

<script>
    export default {
        name: "StudentNavigation",
        methods: {
            changeRoute(route) {
                if(this.$route.path === route) return;
                this.$router.push(route)
            }
        }
    }
</script>

<style scoped>
    .nav-scenes {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: 30px;
        border-bottom: 1px solid gray;
    }
    .item {
        margin: 0 8px;
        &:last-child {
            margin-right: 0;
        }
    }
</style>