<template>
    <div class="Layout-container">
        <div class="student-achievement">
            <StudentAchievement />
        </div>
        <div class="layout-content">
            <StudentNavigation />
            <div class="layout-main">
                <div class="layout-traps">
                    <!--<p>Super tu es à la première scène</p>
                    <p>Compteur : {{ counter }}</p>
                    <button @click="emitEvent">Envoyer un poke</button>-->
                    <Charity />
                    <FakeNews />
                    <Charity />
                    <Charity />
                    <Harassment />
                    <FakeNews />
                </div>
                <div class="layout-flash">
                    <StudentFlash />
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
    import openSocket from 'socket.io-client';
    import {BASE_API_URL} from "../../../utils/constant";
    import MessageContainer from '@/components/messaging/MessageContainer';
    import Charity from '@/components/charity/Charity';
    import FakeNews from '@/components/traps/FakeNews';
    import Harassment from '@/components/traps/Harassment';
    import StudentAchievement from '@/components/student-progess/StudentAchievement';
    import StudentFlash from '@/components/student-progess/StudentFlash';
    import StudentNavigation from '@/components/StudentNavigation';

    export default {
        name: "SceneLayout",
        components: { MessageContainer, StudentAchievement, Charity, StudentNavigation, FakeNews, Harassment, StudentFlash },
        data: () => ({
            counter: 0,
        }),
        sockets: {
            connect: function () {
                console.log('socket connected')
            },
            poke: function (data) {
                console.log(data);
            }
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
        methods: {
            emitEvent() {
                this.counter +=5;
                console.log();
                this.$socket.emit('poke', {
                    counter: this.counter,
                    studentId: this.$store.state.studentId,
                    sessionId: this.$store.state.sessionId
                });
            }
        }
    }
</script>

<style scoped lang="scss">

</style>