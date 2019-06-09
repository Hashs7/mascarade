<template>
    <div class="message-container">
        <div class="contacts">
            <Contact v-for="(contact, i) in contacts"
                     :key="i"
                     :id="contact.id"
                     :selected="contact.selected"
                     :name="contact.author"
                     :lastAnswer="contact.lastAnswer" />
        </div>
        <div class="chatbox">
            <div class="contact-info">
                <span class="contact-name">Doc Seven</span>
                <span class="current-time">25 juin 2019</span>
            </div>
            <div class="chatbox-content">
                <Message v-for="(msg, i) in getCurrentConversation" :key="i" :txt="msg.txt" :time="msg.time" :msgType="msg.type"/>
            </div>
            <div class="chatbox-answer" v-if="$store.state.messages.conversations[getSelectedContact].showAnswers">
                <span class="chatbox-help-msg">Choisis ta réponse</span>
                <button class="answer outline"
                        v-for="res in responses"
                        @click="studentResponse(res.content, res.repIndex)">
                {{res.content}}</button>
                <button class="answer">Ignorer ce message</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Message from '@/components/messaging/Message';
    import Contact from '@/components/messaging/Contact';
    import {dialogRes, initMsg} from './dialogs';
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "MessageContainer",
        components: { Message, Contact },
        data: () => ({
            messages: [],
            responses: [],
            showAnswers: false
        }),
        mounted() {
            this.initChat();
        },
        computed: {
            ...mapGetters([
                'getContact',
                'getCurrentConversation',
                'getSelectedContact'
            ]),
            contacts() {
                return this.$store.state.messages.conversations;
            }
        },
        methods: {
            ...mapMutations([
                'addMessage',
                'addContact'
            ]),
            initChat() {
                if(this.getCurrentConversation.length) return;
                this.addGroupMessage(initMsg('Sarah'));
            },
            addGroupMessage(msgArray) {
                console.log('msgarr', msgArray);
                msgArray.stranger.forEach(({content, delay, type}, i) => {
                    setTimeout(() => {
                        this.addMessage({id: 0, answer: content, type});
                        if(msgArray.stranger.length - 1 === i) {
                            const currentId = this.getSelectedContact;
                            console.log('passed', currentId);
                            setTimeout(() => this.$store.state.messages.conversations[currentId].showAnswers = true, 1000);
                        }
                    }, delay);
                });
                console.log(this.getSelectedContact, this.$store.state.messages.conversations[this.getSelectedContact]);
                this.responses = msgArray.responses;
            },
            studentResponse(answer, repIndex) {
                const id = this.getSelectedContact;
                this.$store.state.messages.conversations[id].showAnswers = false;

                if(repIndex === 'stop') {
                    console.log(repIndex);
                    return;
                }
                if(repIndex === 'report') {
                    console.log(repIndex);
                    return;
                }

                this.addMessage({id, answer, type: 'student'});
                console.log('dialog', dialogRes);
                this.addGroupMessage(dialogRes[repIndex]);
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
        background-color: $primary;
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
        margin: 0 4px;
        padding: 8px 16px;
        background-color: white;
        &.outline {
            border: 1px solid blue;
        }
    }

</style>