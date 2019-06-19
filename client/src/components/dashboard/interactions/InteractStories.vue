<template>
    <div>
        <div
             v-for="(story, i) in getStories"
            class="story"
            :class="{active: story.isActive}"
            :key="i">
            <div class="img-container"></div>
            <span class="name">{{i+1}}</span>
            <span class="story-active" @click="activeStory(i)">{{story.isActive ? active : disable}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InteractStories",
        data: () => ({
            active: 'Activé',
            disable: 'Désactivé'
        }),
        computed: {
            getStories() {
                return this.$store.state.interact.stories;
            }
        },
        methods: {
            sendStory() {
                const story = {
                    src: "https://picsum.photos/300/500",
                    name: "Le monde",
                    description: "Une future explosion ?",
                    delay: 1500,
                };

                this.$socket.emit('newStory', story)
            },
            activeStory(index) {
                if(this.getStories[index].isActive) return;
                this.getStories[index].isActive = true;
                this.sendStory();
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
    }
    .name {
        display: block;
    }
    .story-active {
        display: block;
        border-radius: 50px;
        border: 1px solid gray;
        cursor: pointer;
    }
</style>