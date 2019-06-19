import {updateDialog} from "../../utils/API";
import {isNull} from "../../utils/methods";
import {initMsg} from "../../components/messaging/dialogs";

const conversationCelebrity = {
    id: 0,
    selected: true,
    type: 'celebrity',
    author: 'Alexandre',
    lastAnswer: null,
    showAnswers: false,
    answers: [],
    responses: []
};

const conversationHacker = {
    id: 1,
    selected: true,
    author: 'André',
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
        state.conversations.map(conv => {
            return conv.author
        })
    ),
    getSelectedContact: state => {
        return state.conversations.find(conv => conv.selected);
    },
    getCurrentConversation: state => {
        const current = state.conversations.find(conv => conv.selected);
        if(isNull(current)) return;
        return current.responses;
    }
};

const actions = {
    addMessage({commit, rootState, state}, {repIndex, id, answer, type}) {
        if(type === 'student') {
            const contact = state.conversations.find(conv => conv.selected);
            updateDialog(rootState.studentId, rootState.sessionId, contact.type, answer, repIndex);
        }

        if(repIndex === 'stop' || repIndex === 'report') return;
        commit('addMessage', {id, answer, type})
    },
    initChat({rootState, dispatch, state}) {
        state.conversations.push(conversationCelebrity);
        dispatch('addGroupMessage', initMsg(rootState.firstname));
    },
    addGroupMessage({commit, rootState, state}, msgArray) {
        msgArray.stranger.forEach(({content, delay, type}, i) => {
            setTimeout(() => {
                commit('addMessage', ({id: 0, answer: content, type}));
                if(msgArray.stranger.length - 1 === i) {
                    const currentId = msgArray.convId;
                    setTimeout(() => state.conversations[currentId].showAnswers = true, 1000);
                }
            }, delay);
        });
        const conv = state.conversations.find(conv => conv.selected);
        state.conversations[conv.id].answers = msgArray.responses;
    },
};

const mutations = {

    addMessage(state, {id, answer, type}) {
        let lastAnswer = answer;
        if(type === 'student') {
            lastAnswer = 'Vous : ' + answer;
            state.showAnswers = false;
        }

        lastAnswer = answer.length > 25 ? answer.slice(0,  25) + '...' : answer;

        const response = {
            txt: answer,
            type,
            time: getTime()
        };

        state.conversations[id].responses.push(response);
        state.conversations[id].lastAnswer = lastAnswer;
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
        console.log(isActive, 'notif should');
        console.log(state.hasNotif, 'notif before state');

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