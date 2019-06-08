<template>
    <nav class="nav-scenes">
        <div class="nav-stories">
            <Story
                v-for="(img, i) in stories" 
                :src="img.src"
                :name="img.name"
                :description="img.description"
                :style="`background-image: url(${src})`"/>
           
        </div>
        <div class="nav-right">
            <router-link class="item home" to="/student/exp">Accueil</router-link>
            <router-link class="item msg" to="/student/messages">Message</router-link>
            <span class="item help">Aide</span>
        </div>
    </nav>
</template>

<script>
    import ModalStory from '@/components/modal/ModalStory';
    import Story from '@/components/stories/Story';
    import {initStory} from '../components/stories/stories';
    import {mapMutations} from "vuex";
    export default {
        name: "StudentNavigation",
        components: { Story, initStory },
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