<template>
    <div class="message-container">
        <div class="contacts">

        </div>
        <div class="chatbox">
            <div class="contact-info">
                <span class="contact-name">Doc Seven</span>
                <span class="current-time">25 juin 2019</span>
            </div>
            <div class="chatbox-content">
                <Message v-for="(msg, i) in messages" :key="i" :txt="msg.txt" :time="msg.time" :msgType="msg.type"/>
            </div>
            <div class="chatbox-answer" v-if="showAnswers">
                <span class="chatbox-help-msg">Choisis ta réponse</span>
                <button
                        class="answer outline"
                        @click="studentResponse('Cool, merci du bon plan !', 1)">
                    Cool, merci du bon plan !
                </button>
                <button
                        class="answer outline"
                        @click="studentResponse('Non merci', 2)">
                    Non merci
                </button>
                <button class="answer">Ignorer ce message</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Message from '@/components/messaging/Message';

    export default {
        name: "MessageContainer",
        components: { Message },
        data: () => ({
            messages: [],
            showAnswers: false
        }),
        mounted() {
            this.initChat();
        },
        methods: {
            initChat() {
                setTimeout(() => {
                    this.addMessage("Salut Sarah! Ca fait longtemps !", 'stranger')
                }, 500);
                setTimeout(() => {
                    this.addMessage("Comment ça va?", 'stranger')
                }, 2500);
                setTimeout(() => {
                    this.addMessage("J'aimerais te faire gagner un iphone", 'stranger')
                }, 5000);
                setTimeout(() => {
                    this.addMessage("Tout ce que tu as à faire c'est cliquer sur ce lien :", 'stranger')
                    this.showAnswers = true;
                }, 9000);
            },
            addMessage(msg, type) {
                this.messages.push({
                    txt: msg,
                    type: type,
                    time: this.getTime()
                })
            },
            studentResponse(msg, repIndex) {
                this.addMessage(msg, 'student');
                console.log(repIndex);
            },
            getTime() {
                const time = new Date();
                let min = time.getMinutes();
                if (min < 10) { min = '0' + min }

                return time.getHours() + ':' + min;
            }
        }
    }
</script>

<style scoped lang="scss">
    .message-container {
        max-width: 730px;
        margin: 0 auto;
        display: flex;
        border: 1px solid gray;
    }
    .contacts {
        width: 220px;
        background-color: #00acc1;
    }
    .chatbox {
        padding: 16px;
        flex-grow: 1;
        background-color: rgba(0, 172, 193, 0.18);
    }
    .contact-info {
        border-bottom: 1px solid gray;
    }
    .chatbox-content {
        padding: 16px 0;
    }

    .chatbox-help-msg {
        display: block;
    }

    .answer {
        background-color: white;
        &.outline {
            border: 1px solid blue;
        }
    }

</style>