<template>
    <div>
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
    .student-achievement {
        position: fixed;
        z-index: 10;
        width: 400px;
        height: 100%;
    }
    .layout-content {
        margin-left: 400px;
        padding: 16px;
    }
    .nav-scenes {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        height: 30px;
        border-bottom: 1px solid gray;
    }
    .item {
        margin: 0 8px;
        &:last-child {
            margin-right: 0;
        }
    }
</style>