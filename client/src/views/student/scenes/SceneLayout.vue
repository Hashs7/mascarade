<template>
    <div class="Layout-container">
        <div class="student-achievement">
            <StudentAchievement />
        </div>
        <div class="layout-content">
            <div class="layout-flash">
                <StudentFlash />
            </div>
            <StudentNavigation />
            <div class="layout-main">
                <div class="layout-traps">
                    <Slider />
                    <FakeNews />
                    <Charity />
                    <QuizzContainer />
                    <Harassment />
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
    import MessageContainer from '@/components/messaging/MessageContainer';
    import Charity from '@/components/charity/Charity';
    import QuizzContainer from '@/components/traps/quizz/QuizzContainer';
    import FakeNews from '@/components/traps/FakeNews';
    import Harassment from '@/components/traps/Harassment';
    import StudentAchievement from '@/components/student-progess/StudentAchievement';
    import StudentFlash from '@/components/student-progess/StudentFlash';
    import StudentNavigation from '@/components/StudentNavigation';
    import Slider from '@/components/traps/Slider';
    import {mapActions, mapMutations} from "vuex";

    export default {
        name: "SceneLayout",
        components: {
            MessageContainer, StudentAchievement, Charity,
            StudentNavigation, FakeNews, Harassment, StudentFlash,
            Slider, QuizzContainer
        },
        sockets: {
            newStory(data) {
                console.log('newStory');
                this.$store.commit('addStory', data);
            },
            newMsg(type) {
                // TODO Test type
                this.initChat();
                this.toggleNotif(true);
            }
        },
        methods: {
            ...mapMutations([
                'toggleNotif'
            ]),
            ...mapActions([
                'initChat'
            ]),
        },
        mounted() {
            window.addEventListener('visibilitychange', () => {
                switch(document.visibilityState) {
                    case 'hidden':
                        console.log('Tab is hidden');
                    case 'visible':
                        console.log('Tab focused');
                }
            })
        },
    }
</script>

<style scoped lang="scss">

</style>