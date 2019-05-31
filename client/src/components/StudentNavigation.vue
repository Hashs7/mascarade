<template>
    <nav class="nav-scenes">
        <div class="nav-stories">
            <Story />
        </div>
        <div class="nav-right">
            <router-link class="item home" to="/student/exp">Accueil</router-link>
            <router-link class="item msg" to="/student/messages">Message</router-link>
            <span class="item help">Aide</span>
        </div>
    </nav>
</template>

<script>
    import Story from '@/components/stories/Story';
    export default {
        name: "StudentNavigation",
        components: { Story },
        methods: {
            changeRoute(route) {
                if(this.$route.path === route) return;
                this.$router.push(route)
            }
        }
    }
</script>

<style scoped lang='scss'>
    .nav {
        &-scenes {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            width: 100%;
            border-bottom: 1px solid gray;
            padding-bottom: 2rem;
        }
        &-right {
            a, span {
                margin-left: 1rem;
            }
        }
        &-stories {
            display: flex;
        }
        .item {
            margin: 0 8px;
            &:last-child {
                margin-right: 0;
            }
        }
    }
</style>