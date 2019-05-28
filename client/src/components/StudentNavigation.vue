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

<style scoped lang="scss">
    .nav-scenes {
        position: fixed;
        top: 0;
        left: $achievement-width;
        right: 0;
        background-color: $white;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: $nav-height;
        border-bottom: 1px solid gray;
        padding-right: 20px;
    }
    .item {
        margin: 0 8px;
        &:last-child {
            margin-right: 0;
        }
    }
</style>