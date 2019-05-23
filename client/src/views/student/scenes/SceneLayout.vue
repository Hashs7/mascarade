<template>
    <div>
        <div class="student-achievement">
            <StudentAchievement />
        </div>
        <div class="layout-content">
            <p>Super tu es à la première scène</p>
            <p>Compteur : {{ counter }}</p>
            <button @click="emitEvent">Envoyer un poke</button>
            <MessageContainer />
            <Charity />
            <Charity />
            <Charity />
        </div>
    </div>
</template>

<script>
    import openSocket from 'socket.io-client';
    import {BASE_API_URL} from "../../../utils/constant";
    import MessageContainer from '@/components/messaging/MessageContainer';
    import Charity from '@/components/charity/Charity';
    import StudentAchievement from '@/components/student-progess/StudentAchievement';

    export default {
        name: "SceneLayout",
        components: { MessageContainer, StudentAchievement, Charity },
        data: () => ({
            counter: 0,
            socket: null,
        }),
        mounted() {
            this.socket = openSocket(BASE_API_URL);
            this.socket.on('poke', data =>  {
                console.log(data);
            });

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
                console.log(this.socket);
                this.counter +=5;
                console.log();
                this.socket.emit('poke', {
                    counter: this.counter,
                    studentId: this.$store.state.studentId,
                    sessionId: this.$store.state.sessionId
                });
            }
        }
    }
</script>

<style scoped>
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
</style>