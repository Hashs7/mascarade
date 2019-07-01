<template>
    <div class="layout__container">
        <div class="student-achievement">
            <StudentAchievement />
        </div>
        <router-link class="nav-link message" :class="{hasNotif: hasNotif, rubberBand: hasNotif}" to="/messages">
            <div class="link-container">
                <svg viewBox="0 0 50 50" preserveAspectRatio="none" id="link-circle" >
                    <circle cx="25" cy="25" r="25" fill="#00D7FF" />
                </svg>
                <div class="icon">
                    <div class="msg">
                        <Msg/>
                    </div>
                </div>
            </div>
        </router-link>
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
    import StudentStories from '@/components/stories/StudentStories';
    import Slider from '@/components/traps/Slider';
    import {mapActions, mapMutations} from "vuex";
    import {routePath} from "../../../router/routes";
    import Msg from '@/assets/messages.svg';

    export default {
        name: "SceneLayout",
        components: {
            MessageContainer, StudentAchievement, Charity,
            StudentStories, FakeNews, Harassment, StudentFlash,
            Slider, QuizzContainer, ScrollTop, ModalTuto, Msg
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
        computed: {
            hasNotif() {
                return this.$store.state.messages.hasNotif;
            },
        }
    }
</script>

<style lang="scss">
    body {
        background-color: $violet;
    }
    .theme--light.application {
        color: $dark--violet !important;
    }
    .nav-link.message {
        position: fixed;
        bottom: 50px;
        right: 70px;
        z-index: 20;
        &.hasNotif .msg:before {
            position: absolute;
            top: -4px;
            right: -2px;
            display: block;
            content: '';
            width: 14px;
            height: 14px;
            border-radius: 100%;
            background-color: $violet;
        }
    }
    .msg {
        position: relative;
    }
    .label-msg {
        width: 200px;
        position: absolute;
        top: -40px;
        right: -60px;
        pointer-events: none;
    }
    .link-container {
        position: relative;
        width: 100px;
        height: 100px;
        #link-circle {
            /*pointer-events: none;*/
            transition: transform .4s ease;
        }
        &:hover {
            .icon {
                transform: scale(.8);
            }
            #link-circle {
                transform: scale(1.3);
            }
        }
        svg {
            width: 100%;
            height: 100%;
        }
        .icon {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            width: 45px;
            height: 45px;
            margin: auto;
            transition: transform .4s ease;
        }
    }
    .trails {
        position: absolute;
        left: -200px;
        top: 340px;
        height: calc(100% - 940px);
        width: 4px;
        background-size: contain;
        background-repeat: repeat-y;
    }

    @keyframes swing {
        15% {
            -webkit-transform: rotate3d(0, 0, 1, 0deg);
            transform: rotate3d(0, 0, 1, 0deg);
        }
        20% {
            -webkit-transform: rotate3d(0, 0, 1, 10deg);
            transform: rotate3d(0, 0, 1, 10deg);
        }

        30% {
            -webkit-transform: rotate3d(0, 0, 1, -10deg);
            transform: rotate3d(0, 0, 1, -10deg);
        }

        40% {
            -webkit-transform: rotate3d(0, 0, 1, 10deg);
            transform: rotate3d(0, 0, 1, 10deg);
        }

        50% {
            -webkit-transform: rotate3d(0, 0, 1, -10deg);
            transform: rotate3d(0, 0, 1, -10deg);
        }

        60% {
            -webkit-transform: rotate3d(0, 0, 1, 5deg);
            transform: rotate3d(0, 0, 1, 5deg);
        }
        65% {
            -webkit-transform: rotate3d(0, 0, 1, 0deg);
            transform: rotate3d(0, 0, 1, 0deg);
        }
    }
    @keyframes rubberBand {
        from {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }

        30% {
            -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
        }

        40% {
            -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
        }

        50% {
            -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
        }

        65% {
            -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
        }

        75% {
            -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
        }

        to {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }
    }

    .rubberBand {
        -webkit-animation-name: rubberBand;
        animation-name: rubberBand;
        animation-iteration-count: infinite;
        animation-duration: 1.5s;
    }

    .swing {
        -webkit-transform-origin: top center;
        transform-origin: top center;
        -webkit-animation-name: swing;
        animation-name: swing;
        animation-iteration-count: infinite;
        animation-duration: 2s;
    }
</style>