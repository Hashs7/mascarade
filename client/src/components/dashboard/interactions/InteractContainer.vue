<template>
    <div>
        <p>Interactions</p>
        <div class="tab-interact">
            <button @click="tab = 'story'">Stories</button>
            <button @click="tab = 'message'">Messages</button>
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

<style scoped>

</style>