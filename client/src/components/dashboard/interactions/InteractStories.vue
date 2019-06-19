<template>
    <div>
        <div class="story"
             v-for="(story, i) in stories"
            :key="i">
            <div class="img-container"></div>
            <span class="name">{{i}}</span>
            <span class="story-active">{{story.isActive ? active : disable}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InteractStories",
        data: () => ({
            active: 'Activée',
            disable: 'Désactivée',
            stories: [{
                img: '',
                isActive: false
            }]
        })
    }
</script>

<style scoped lang="scss">
    .img-container {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        border: 3px solid $violet;
    }
</style>