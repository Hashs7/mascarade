<template>
    <div class="layout__contain">
        <div class="student-achievement">
            <StudentAchievement />
        </div>
        <div class="layout-content">
            <StudentNavigation />

            <MessageContainer />
        </div>
    </div>
</template>

<script>
    import StudentNavigation from '@/components/StudentNavigation';
    import MessageContainer from '@/components/messaging/MessageContainer';
    import Charity from '@/components/charity/Charity';
    import StudentAchievement from '@/components/student-progess/StudentAchievement';

    export default {
        name: "SceneLayout",
        components: { MessageContainer, StudentAchievement, Charity, StudentNavigation },
        data: () => ({}),
        mounted() {
        },
        methods: {
        }
    }
</script>

<style scoped lang="scss">
    .layout__contain {
        background-color: $white;
        min-height: 100%;
        .layout-content {
           width: 1000px;
        }
        .nav-scenes {
            width: initial;
        }
    }
    .item {
        margin: 0 8px;
        &:last-child {
            margin-right: 0;
        }
    }
</style>