<template>
    <nav class="nav-scenes">
        <div class="nav-stories">
            <Story
                v-for="(img, i) in stories"
                :key="i"
                :src="img.src"
                :name="img.name"
                :description="img.description"/>
        </div>
        <div class="nav-right">
            <router-link class="item home" to="/student/exp">
                <Home />
            </router-link>
            <router-link class="item msg" to="/student/messages">
                <Msg />
            </router-link>
            <span class="item help">
                <Help />
            </span>
        </div>
    </nav>
</template>

<script>
    import Home from '@/assets/home.svg';
    import Msg from '@/assets/message.svg';
    import Help from '@/assets/help.svg';
    import Story from '@/components/stories/Story';
    export default {
        name: "StudentNavigation",
        components: { Story, Home, Msg, Help },
        data: () => ({
            isModalVisible: false,
        }),
        methods: {
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            },
            changeRoute(route) {
                if(this.$route.path === route) return;
                this.$router.push(route)
            }
        },
        computed: {
            stories() {
                return this.$store.state.stories.allStories;
            }
        },
    }
</script>

<style scoped lang='scss'>
    .nav {
        &-scenes {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            width: 87rem;
            padding-bottom: 2rem;
            margin: auto;
        }
        &-right {
            a, span {
                margin-left: 1rem;
            }
            .item {
                img {
                    width: 3rem;
                    margin-left: 1rem;
                }
            }
        }
        &-stories {
            display: flex;
        }
        .item {
            display: inline-block;
            margin: 0 8px;
            svg {
                display: inline-block;
            }
            &:last-child {
                margin-right: 0;
            }
        }
    }
</style>