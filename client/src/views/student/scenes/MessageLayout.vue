<template>
    <div class="layout__contain">
        <div class="student-achievement">
            <StudentAchievement />
        </div>
        <div class="layout-content">
            <StudentStories />

            <MessageContainer />
        </div>
    </div>
</template>

<script>
    import StudentStories from '@/components/StudentStories';
    import MessageContainer from '@/components/messaging/MessageContainer';
    import Charity from '@/components/charity/Charity';
    import StudentAchievement from '@/components/student-progess/StudentAchievement';
    import {routePath} from "../../../router/routes";

    export default {
        name: "SceneLayout",
        components: { MessageContainer, StudentAchievement, Charity, StudentStories },
        data: () => ({}),
        sockets: {
            showBilan(studentId) {
                if(studentId !== this.$store.state.studentId) return;
                this.$router.push(routePath.STUDENT_SUMMARY);
            }
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