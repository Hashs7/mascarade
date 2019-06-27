import {updateDialog} from "../../utils/API";
import {isNull} from "../../utils/methods";
import {initMsgCelebrity} from "../../components/messaging/dialogs";
import {initMsgHacker} from "../../components/messaging/dialogHack";

const conversationCelebrity = {
    id: 0,
    selected: true,
    type: 'celebrity',
    author: 'Sundy Jules',
    lastAnswer: null,
    showAnswers: false,
    answers: [],
    responses: []
};

const conversationHacker = {
    id: 1,
    selected: true,
    author: 'Lucile',
    type: 'hacker',
    lastAnswer: null,
    showAnswers: false,
    answers: [],
    responses: []
};

export const getTime = () => {
    const time = new Date();
    let min = time.getMinutes();
    if (min < 10) { min = '0' + min }

    return time.getHours() + ':' + min;
};

const state = {
    hasNotif: false,
    conversations: []
};

const getters = {
    getContact: state => (
        state.conversations.map(conv => conv.author)
    ),
    getSelectedContact: state => (
        state.conversations.find(conv => conv.selected)
    ),
    getCurrentConversation: state => {
        const current = state.conversations.find(conv => conv.selected);
        if(isNull(current)) return;
        return current.responses;
    }
};

const actions = {
    addMessage({commit, rootState, state}, {repIndex, id, answer, type, typeLink}) {
        if(type === 'student') {
            const contact = state.conversations.find(conv => conv.selected);
            updateDialog(rootState.studentId, rootState.sessionId, contact.type, answer, repIndex);
        }

        if(repIndex === 'stop') return;
        commit('addMessage', {id, answer, type, link: typeLink})
    },
    initChat({rootState, dispatch, state}, type) {
        if(state.conversations.length) {
            state.conversations.forEach(conv => conv.selected = false);
        }

        if(type === 'celebrity') {
            state.conversations.push(conversationCelebrity);
            dispatch('addGroupMessage', initMsgCelebrity(rootState.firstname));
        } else {
            state.conversations.push(conversationHacker);
            dispatch('addGroupMessage', initMsgHacker(rootState.firstname));
        }
    },
    addGroupMessage({commit, rootState, state}, msgArray) {
        const currentId = msgArray.convId;
        const conv = state.conversations.find(conv => conv.id === currentId);

        msgArray.stranger.forEach(({content, delay, type}, i) => {
            setTimeout(() => {
                commit('addMessage', ({id: currentId, answer: content, type}));
                conv.answers = msgArray.responses;

                if(msgArray.stranger.length - 1 === i && msgArray.responses.length) {
                    setTimeout(() => conv.showAnswers = true, 1000);
                }
            }, delay);
        });

    },
};

const mutations = {
    addMessage(state, {id, answer, type, link}) {
        let lastAnswer = answer;
        if(type === 'student') {
            lastAnswer = 'Vous : ' + answer;
            state.showAnswers = false;
        }

        lastAnswer = answer.length > 25 ? answer.slice(0,  25) + '...' : answer;

        const response = {
            txt: answer,
            type,
            link,
            time: getTime()
        };
        const conv = state.conversations.find(conv => conv.id === id)

        conv.responses.push(response);
        conv.lastAnswer = lastAnswer;
    },
    addContact(state, {author, msg }) {
        state.conversations.push({
            id: state.conversations.length,
            author,
            lastAnswer: msg,
            responses: [{
                txt: msg,
                type: 'stranger',
                time: getTime()
            }]
        })
    },
    selectConversation(state, {id}) {
        state.conversations.map(conv => conv.selected = false);
        state.conversations[id].selected = true;
    },
    toggleNotif(state, isActive) {
        if(!isNull(isActive)) {
            state.hasNotif = isActive;
            return;
        }
        state.hasNotif = !state.hasNotif;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}