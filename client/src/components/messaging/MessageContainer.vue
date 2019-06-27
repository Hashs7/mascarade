<template>
    <div class="message-container">
        <modal
                :visible="modalCelebrity"
                @close="closeModalCelebrity"
                title="Aïe..."
                description="Tu viens de te faire arnaquer, ce numéro est payant… Fais très attention aux faux profils de célébrités sur les réseaux, ils sont nombreux !"
                buttonFirst="Ok"
                :buttonFirstAction="closeModalCelebrity"/>
        <modal
                :visible="modalHacker"
                @close="closeModalHacker"
                title="Pas de bol !"
                description="Tu viens de télécharger un fichier contenant un virus. Soit très prudent lorsque quelqu'un t'envoie un fichier suspect, il peut s'agir d'un pirate."
                buttonFirst="Ok"
                :buttonFirstAction="closeModalHacker"/>

        <div class="contacts">
            <Contact v-if="contacts.length"
                    v-for="(contact, i) in contacts"
                     :key="i"
                     :id="contact.id"
                     :selected="contact.selected"
                     :name="contact.author"
                     :lastAnswer="contact.lastAnswer" />
        </div>
        <div class="chatbox">
            <div class="contact-info" v-if="getSelectedContact">
                <span class="contact-name">{{getSelectedContact.author}}</span>
                <span class="current-time">{{currentDate}} 2019</span>
            </div>
            <div class="chatbox-content">
                <Message v-for="(msg, i) in getCurrentConversation" :key="i" :txt="msg.txt" :time="msg.time" :msgType="msg.type" :typeLink="msg.link"/>
            </div>

            <div v-if="contacts.length && showAnswer">
                <div class="chatbox-group">
                    <span class="chatbox-help-msg">Choisis ta réponse</span>
                    <div class="chatbox-separate"></div>
                </div>
                <div class="chatbox-answer" >

                    <button class="answer outline"
                            v-for="res in responses"
                            @click="studentResponse(res.content, res.repIndex, res.convState)">
                        {{res.content}}
                    </button>
                    <button class="answer" @click="studentResponse('Ignorer', 'stop')">Ignorer ce message</button>
                </div>
            </div>

            <div class="no-conversation" v-if="!contacts.length">
                <h3>Vous n'avez pas de conversation en cours</h3>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters, mapMutations} from "vuex";
    import Message from '@/components/messaging/Message';
    import Contact from '@/components/messaging/Contact';
    import {dialogResCelebrity} from './dialogs';
    import {dialogResHacker} from "./dialogHack";
    import {MONTH} from "../../utils/constant";
    import dayjs from "dayjs";
    import Modal from '@/components/modal/Modal';

    export default {
        name: "MessageContainer",
        components: { Message, Contact, Modal },
        data: () => ({
            currentDate: null,
            modalCelebrity: false,
            modalHacker: false,
        }),
        mounted() {
            const day = dayjs().date();
            const month = MONTH[dayjs().month()];
            this.currentDate = day + ' ' + month;
            this.toggleNotif(false);
        },
        sockets: {
            newMsg(type) {
                this.initChat(type);
            }
        },
        computed: {
            ...mapGetters([
                'getContact',
                'getCurrentConversation',
                'getSelectedContact'
            ]),
            contacts() {
                return this.$store.state.messages.conversations;
            },
            responses() {
                return this.getSelectedContact.answers;
            },
            showAnswer() {
                return this.getSelectedContact.showAnswers;
            }
        },
        methods: {
            ...mapMutations([
                'addContact',
                'toggleNotif'
            ]),
            ...mapActions([
                'addMessage',
                'addGroupMessage',
                'initChat',
            ]),
            studentResponse(answer, repIndex, convState) {
                const id = this.getSelectedContact.id;
                this.getSelectedContact.showAnswers = false;
                this.addMessage({repIndex, id, answer, type: 'student'});
                if(convState === 'trap' && id === 0) {
                    this.modalCelebrity = true;
                }

                if(convState === 'trap' && id === 1) {
                    this.modalHacker = true;
                }
                if(repIndex === 'stop' || repIndex === 'report') return;
                if(this.getSelectedContact.type === 'celebrity') {
                    this.addGroupMessage(dialogResCelebrity[repIndex]);
                } else {
                    this.addGroupMessage(dialogResHacker[repIndex]);
                }
            },
            closeModalCelebrity() {
                this.modalCelebrity = false;
            },
            closeModalHacker() {
                this.modalHacker = false;
            }
        }
    }
</script>

<style scoped lang="scss">
    .message-container {
        position: relative;
        display: flex;
        max-width: 1300px;
        height: 48rem;
        margin: 48px auto 0 auto;
        border-radius: 0.5rem;
    }

    .no-conversation {
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        transform: translateY(-50%);
        margin: auto;
        text-align: center;
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
            justify-content: center;
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