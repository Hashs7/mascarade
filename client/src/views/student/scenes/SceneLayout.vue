<template>
    <div class="layout__container">
        <div class="student-achievement">
            <StudentAchievement />
        </div>
        <div class="layout-content">
            <div class="layout-flash">
                <StudentFlash />
            </div>
            <StudentStories />
            <div class="layout-main">
                <ScrollTop />
                <div class="layout-traps">
                    <div class="trails" :style="{ backgroundImage: `url('${trails}')` }"></div>
                    <Slider />
                    <FakeNews />
                    <Charity />
                    <QuizzContainer />
                    <Harassment />
                </div>
            </div>
        </div>
        <modalTuto    
            v-show="$store.state.isTutorial"
            @close="closeModal"
            />
    </div>
</template>

<script>
    import trails from '@/assets/img/trails.png';
    import ScrollTop from '@/components/UI/ScrollTop';
    import MessageContainer from '@/components/messaging/MessageContainer';
    import ModalTuto from '@/components/tutorial/ModalTuto';
    import Charity from '@/components/charity/Charity';
    import QuizzContainer from '@/components/traps/quizz/QuizzContainer';
    import FakeNews from '@/components/traps/FakeNews';
    import Harassment from '@/components/traps/Harassment';
    import StudentAchievement from '@/components/student-progess/StudentAchievement';
    import StudentFlash from '@/components/student-progess/StudentFlash';
    import StudentStories from '@/components/StudentStories';
    import Slider from '@/components/traps/Slider';
    import {mapActions, mapMutations} from "vuex";
    import {routePath} from "../../../router/routes";

    export default {
        name: "SceneLayout",
        components: {
            MessageContainer, StudentAchievement, Charity,
            StudentStories, FakeNews, Harassment, StudentFlash,
            Slider, QuizzContainer, ScrollTop, ModalTuto
        },
        data: () => ({
            trails: trails
        }),
        sockets: {
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
            closeModal() {
                this.$store.state.isTutorial = false;
            },
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
    .trails {
        position: absolute;
        left: -200px;
        top: 340px;
        height: calc(100% - 800px);
        width: 8px;
        background-size: contain;
        background-repeat: repeat-y;
    }
</style>