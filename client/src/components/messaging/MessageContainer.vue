<template>
    <div class="message-container">
        <modal
                :visible="modalCelebrity"
                @close="closeModalCelebrity"
                title="Aïe..."
                description="Tu viens de te faire arnaquer, ce numéro est payant… Fais très attention aux faux profils de célébrités sur les réseaux, ils sont nombreux !"
                buttonFirst="Ok"
                :buttonFirstAction="closeModalCelebrity"/>
        <modal
                :visible="modalHacker"
                @close="closeModalHacker"
                title="Pas de bol !"
                description="Tu viens de télécharger un fichier contenant un virus. Soit très prudent lorsque quelqu'un t'envoie un fichier suspect, il peut s'agir d'un pirate."
                buttonFirst="Ok"
                :buttonFirstAction="closeModalHacker"/>

        <div class="contacts">
            <router-link to="/exp">
                <div class="contacts__back">
                    <Arrow/>
                    <p>Retour au fil d'actualité</p>
                </div>
             </router-link>
            <Contact v-if="contacts.length"
                    v-for="(contact, i) in contacts"
                     :key="i"
                     :id="contact.id"
                     :img="i === 0 ? jules : lucile"
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
    import Arrow from '@/assets/arrow_back.svg';
    import Message from '@/components/messaging/Message';
    import Contact from '@/components/messaging/Contact';
    import jules from "@/assets/img/jules.jpg";
    import lucile from "@/assets/img/lucile.jpg";
    import {dialogResCelebrity} from './dialogs';
    import {dialogResHacker} from "./dialogHack";
    import {MONTH} from "../../utils/constant";
    import dayjs from "dayjs";
    import Modal from '@/components/modal/Modal';

    export default {
        name: "MessageContainer",
        components: { Arrow, Message, Contact, Modal },
        data: () => ({
            currentDate: null,
            modalCelebrity: false,
            modalHacker: false,
            jules: jules,
            lucile: lucile
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

                if(convState === 'trap' && id === 0) { this.modalCelebrity = true }
                if(convState === 'trap' && id === 1) { this.modalHacker = true }

                if(repIndex === 'stop' || repIndex === 'report') {
                    if(id === 0) { this.$store.state.validTrap.convCelebrity = true }
                    if(id === 1) { this.$store.state.validTrap.convHacker = true }
                    return;
                }
                if(this.getSelectedContact.type === 'celebrity') {
                    const res = dialogResCelebrity.find(el => el.responseId === repIndex);
                    this.addGroupMessage(res);
                } else {
                    const res = dialogResHacker.find(el => el.responseId === repIndex);
                    this.addGroupMessage(res);
                }
            },
            closeModalCelebrity() {
                this.modalCelebrity = false;
                this.$store.dispatch('checkValidateAll');
            },
            closeModalHacker() {
                this.modalHacker = false;
                this.$store.dispatch('checkValidateAll');
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
        border-radius: 30px;
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
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        &__back {
            padding-top: 2.5rem;
            color: $dark--violet;
            display: flex;
            margin-left: 10px;
            p {
                font-size: 14px;  
                margin-left: 10px;  
            }
        }
    }
    .chatbox {
        padding: 16px;
        flex-grow: 1;
        background-color: $grey--light;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
        overflow-y: scroll;
        width: 100%;
        &-answer {
            display: flex;
            justify-content: center;
        }
/*        &::-webkit-scrollbar {
            background-color: $grey--light;
        } 

        &::-webkit-scrollbar-thumb {
            background-color: $light--blue;
        }*/
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
        color: $orange;
    }

    .chatbox-separate {
        height: .1rem;
        width: 6rem;
        background: $orange;
        margin-top: 0.9rem;
        margin-bottom: 2.2rem;
    }

    .answer {
        margin: 0 4px;
        padding: 0.6rem 1.4rem;
        color: $orange;
        border: 1px solid $orange;
        border-radius: 2.1rem;
        font-size: 1.3rem;
        &:hover {
            transition: ease 0.2s;
            background: $orange;
            color: $white;
        }
    }
</style>