<template>
    <div>
        <div
             v-for="(story, i) in getStories"
            class="story"
            :class="{active: story.isActive}"
            :key="i">
            <div class="img-container" :style="'background-image: url('+story.img+')'"></div>
            <span class="name">{{i+1}}</span>
            <span class="story-active" @click="activeStory(i)">{{story.isActive ? active : disable}}</span>
        </div>
    </div>
</template>

<script>
    import StoryMoon from '@/assets/img/story_moon.jpg';
    import StoryIphone from '@/assets/img/story_iphone.png';

    export default {
        name: "InteractStories",
        components: { StoryMoon, StoryIphone },
        data: () => ({
            active: 'Activé',
            disable: 'Désactivé',
            storyMoon: StoryMoon,
            storyIphone: StoryIphone,
        }),
        computed: {
            getStories() {
                return this.$store.state.interact.stories;
            }
        },
        methods: {
            sendStory(index) {
                let story;
                if(index === 0) {
                    story = {
                        src: StoryMoon,
                        name: "Le Gorafi",
                        description: "Une future explosion ?",
                        delay: 1500,
                    };
                } else {
                    story = {
                        src: StoryIphone,
                        name: "Sundy Jules",
                        description: "Tente de gagner ton iphone XR",
                        delay: 1500,
                    };
                }

                this.$socket.emit('newStory', story)
            },
            activeStory(index) {
                if(this.getStories[index].isActive) return;
                this.getStories[index].isActive = true;
                this.sendStory(index);
            }
        }
    }
</script>

<style scoped lang="scss">
    .story {
        display: inline-block;
        width: 100px;
        margin: 32px;
        text-align: center;
        &.active {
            color: $violet;
            .img-container, .story-active {
                border-color: $violet;
            }
        }
    }
    .img-container {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        border: 3px solid gray;
        background-position: center;
        background-size: 105%;
    }
    .name {
        display: block;
    }
    .story-active {
        user-select: none;
        display: block;
        border-radius: 50px;
        border: 1px solid gray;
        cursor: pointer;
    }
</style>