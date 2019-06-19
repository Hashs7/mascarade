<template>
    <div class="interact-container">
        <p>Interactions</p>
        <div class="tab-interact">
            <button @click="tab = 'story'" :class="{active: tab === 'story' }">Stories</button>
            <button @click="tab = 'message'" :class="{active: tab === 'message' }">Messages</button>
        </div>
        <div>
            <InteractStories v-if="tab === 'story'"/>
            <InteractMessages v-else-if="tab === 'message'"/>
        </div>
    </div>
</template>

<script>
    import InteractMessages from '@/components/dashboard/interactions/InteractMessages';
    import InteractStories from '@/components/dashboard/interactions/InteractStories';

    export default {
        name: "InteractContainer",
        components: {
            InteractStories,
            InteractMessages
        },
        data: () => ({
            tab: 'story'
        })
    }
</script>

<style scoped lang="scss">
    .interact-container {
        min-height: 320px;
        background-color: $white;
        padding: 8px 16px;
        width: 860px;
        border-radius: 0.6rem;
    }
    .tab-interact {
        display: flex;
        justify-content: center;
        button {
            border: 1px solid $violet;
            padding: 0.5rem 4rem;
            width: 170px;
            &:hover {
                background: $light--blue;
                color: $black;
            }
            &:first-child {
                border-top-left-radius: 0.6rem;
                border-bottom-left-radius: 0.6rem;
            }
            &:last-child {
                border-top-right-radius: 0.6rem;
                border-bottom-right-radius: 0.6rem;
            }
            &.active {
                background: $violet;
                color: $white;
            }
        }
    }
</style>