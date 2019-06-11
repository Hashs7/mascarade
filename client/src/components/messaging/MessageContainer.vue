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
                <span class="contact-name">{{getSelectedContact.author}}</span>
                <span class="current-time">25 juin 2019</span>
            </div>
            <div class="chatbox-content">
                <Message v-for="(msg, i) in getCurrentConversation" :key="i" :txt="msg.txt" :time="msg.time" :msgType="msg.type"/>
            </div>
            <div class="chatbox-answer" v-if="$store.state.messages.conversations[getSelectedContact.id].showAnswers">
                <span class="chatbox-help-msg">Choisis ta réponse</span>
                <v-btn color="info"
                       v-for="(res, i) in responses"
                       :key="i"
                       @click="studentResponse(res.content, res.repIndex)">{{res.content}}</v-btn>
                <v-btn class="answer">Ignorer ce message</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
    import Message from '@/components/messaging/Message';
    import Contact from '@/components/messaging/Contact';
    import {dialogRes, initMsg} from './dialogs';
    import {mapActions, mapGetters, mapMutations} from "vuex";

    export default {
        name: "MessageContainer",
        components: { Message, Contact },
        data: () => ({
            messages: [],
            responses: [],
            showAnswers: false
        }),
        mounted() {
            console.log(this.getCurrentConversation, 'selected');
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
                'addContact'
            ]),
            ...mapActions([
                'addMessage',
            ]),
            initChat() {
                if(this.getCurrentConversation.length) return;
                this.addGroupMessage(initMsg('Sarah'));
            },
            addGroupMessage(msgArray) {
                msgArray.stranger.forEach(({content, delay, type}, i) => {
                    setTimeout(() => {
                        this.addMessage({id: 0, answer: content, type});
                        if(msgArray.stranger.length - 1 === i) {
                            const currentId = this.getSelectedContact.id;
                            console.log('passed', currentId);
                            setTimeout(() => this.$store.state.messages.conversations[currentId].showAnswers = true, 1000);
                        }
                    }, delay);
                });
                this.responses = msgArray.responses;
            },
            studentResponse(answer, repIndex) {
                const id = this.getSelectedContact.id;
                this.$store.state.messages.conversations[id].showAnswers = false;

                if(repIndex === 'stop') {
                    console.log(repIndex);
                    return;
                }
                if(repIndex === 'report') {
                    console.log(repIndex);
                    return;
                }

                this.addMessage({repIndex, id, answer, type: 'student'});
                this.addGroupMessage(dialogRes[repIndex]);
            }
        }
    }
</script>

<style scoped lang="scss">
    .message-container {
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        border: 1px solid gray;
    }
    .contacts {
        width: 350px;
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