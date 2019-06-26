<template>
    <div class="nav-scenes" v-if="stories.length">
        <div class="nav-stories">
            <p>Mes stories</p>
            <Story
                v-for="(img, i) in stories"
                :key="i"
                :src="img.src"
                :name="img.name"
                :description="img.description"/>
        </div>
    </div>
</template>

<script>
    import Home from '@/assets/home.svg';
    import Msg from '@/assets/message.svg';
    import Help from '@/assets/help.svg';
    import Story from '@/components/stories/Story';
    export default {
        name: "StudentStories",
        components: { Story, Home, Msg, Help },
        data: () => ({
            isModalVisible: false,
        }),
        sockets: {
            newStory(data) {
                this.$store.commit('addStory', data);
            },
        },
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
            justify-content: flex-start;
            align-items: flex-end;
            padding-bottom: 1rem;
            margin: auto;
            width: 600px;
            padding-top: 3rem;
        }
        &-right {
            display: flex;
            a, span {
                margin-left: 1rem;
            }
            .item {
                svg {
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