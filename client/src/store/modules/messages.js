import {updateDialog} from "../../utils/API";

const conversationExample = {
    id: 0,
    selected: true,
    type: 'celebrity',
    author: 'Michel',
    lastAnswer: null,
    showAnswers: false,
    responses: []
};

const conversationExample2 = {
    id: 1,
    selected: false,
    author: 'André',
    type: 'hacker',
    lastAnswer: null,
    showAnswers: false,
    responses: []
};

export const getTime = () => {
    const time = new Date();
    let min = time.getMinutes();
    if (min < 10) { min = '0' + min }

    return time.getHours() + ':' + min;
};

const state = {
    conversations: [conversationExample, conversationExample2],
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
    }
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
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}