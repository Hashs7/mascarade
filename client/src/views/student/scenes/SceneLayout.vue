<template>
    <div class="layout__container">
        <div class="student-achievement">
            <StudentAchievement />
        </div>
        <div class="layout-content">
            <div class="layout-flash">
                <StudentFlash />
            </div>
            <StudentNavigation />
            <div class="layout-main">
                <ScrollTop />
                <div class="layout-traps">
                    <Slider />
                    <FakeNews />
                    <Charity />
                    <QuizzContainer />
                    <Harassment />
                </div>
            </div>
        </div>
        <modalTuto    
            v-show="isModalVisible"
            title="Bienvenue sur Mascarade !"
            description="Mascarade c'est LE nouveau réseau social du 
moment ! Story, chat, flash, tout ce qu'il te faut pour rester connecté ! Attention on devient vite accro ;)"
            />
    </div>
</template>

<script>
    import ScrollTop from '@/components/UI/ScrollTop';
    import MessageContainer from '@/components/messaging/MessageContainer';
    import ModalTuto from '@/components/tutorial/ModalTuto';
    import Charity from '@/components/charity/Charity';
    import QuizzContainer from '@/components/traps/quizz/QuizzContainer';
    import FakeNews from '@/components/traps/FakeNews';
    import Harassment from '@/components/traps/Harassment';
    import StudentAchievement from '@/components/student-progess/StudentAchievement';
    import StudentFlash from '@/components/student-progess/StudentFlash';
    import StudentNavigation from '@/components/StudentNavigation';
    import Slider from '@/components/traps/Slider';
    import {mapActions, mapMutations} from "vuex";
    import {routePath} from "../../../router/routes";

    export default {
        name: "SceneLayout",
        components: {
            MessageContainer, StudentAchievement, Charity,
            StudentNavigation, FakeNews, Harassment, StudentFlash,
            Slider, QuizzContainer, ScrollTop, ModalTuto
        },
        data: () => ({
            isModalVisible: true,
        }),
        sockets: {
            newStory(data) {
                console.log('newStory');
                this.$store.commit('addStory', data);
            },
            newMsg(type) {
                this.initChat(type);
                this.toggleNotif(true);
            },
            showBilan(studentId) {
                if(studentId !== this.$store.state.studentId) return;
                this.$router.push(routePath.STUDENT_SUMMARY);
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