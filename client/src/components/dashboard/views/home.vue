<template>
    <div>
        <NewSession />
        <SessionTabs />
    </div>
</template>

<script>
    import NewSession from '@/components/dashboard/NewSession';
    import SessionTabs from '@/components/dashboard/SessionTabs';

    export default {
        name: "home",
        components: {
            NewSession,
            SessionTabs
        },
    }
</script>

<style scoped>

</style>