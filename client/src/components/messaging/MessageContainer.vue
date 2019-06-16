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
            <div class="chatbox-group">
                <span class="chatbox-help-msg">Choisis ta réponse</span>
                <div class="chatbox-separate"></div>
            </div>
            <div class="chatbox-answer" v-if="$store.state.messages.conversations[getSelectedContact.id].showAnswers">
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
                this.addMessage({repIndex, id, answer, type: 'student'});

                if(repIndex === 'stop' || repIndex === 'report') return;
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
        border-radius: 0.5rem;
        height: 48rem;
    }
    .contacts {
        width: 35rem;
        background-color: $grey--light;
        border-top-left-radius: 0.5rem;
    }
    .chatbox {
        padding: 16px;
        flex-grow: 1;
        background-color: $grey--light;
        border-top-right-radius: 0.5rem;
        overflow-y: scroll;
        width: 100%;
        &-answer {
            display: flex;
        }
        &::-webkit-scrollbar {
            background-color: $grey--light;
        } 

        &::-webkit-scrollbar-thumb {
            background-color: $light--blue;
        }
    }
    .contact-info {
        border-bottom: 1px solid $grey--dark;
        display: flex;
        justify-content: space-between;
        font-size: 1.4rem;
        padding-bottom: 2rem;
        padding-top: 1rem;
    }
    .chatbox-content {
        padding: 16px 0;
    }

    .chatbox-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.4rem;
        color: $violet;
    }

    .chatbox-separate {
        height: .1rem;
        width: 6rem;
        background: $violet;
        margin-top: 0.9rem;
        margin-bottom: 2.2rem;
    }

    .answer {
        margin: 0 4px;
        padding: 0.6rem 1.4rem;
        color: $violet;
        border: 1px solid $violet;
        border-radius: 2.1rem;
        font-size: 1.3rem;
        &:hover {
            transition: ease 0.2s;
            background: $violet;
            color: $white;
            //transform: scale(1.05);
        }
    }

</style>