const conversationExample = {
    id: 0,
    selected: true,
    author: 'Michel',
    lastAnswer: null,
    showAnswers: false,
    responses: []
};
const conversationExample2 = {
    id: 1,
    selected: false,
    author: 'André',
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
    /**
     * clear all completed tasks by group
     * @param commit
     */
/*    [type.CLEAR_COMPLETED_TASK]: ({ commit }, { groupId }) => {
        commit(type.MUTATE_CLEAR_COMPLETED_TASK, { groupId })
    },
    /!**
     *
     * @param commit
     * @param id
     *!/
    [type.TOGGLE_EDIT_TASK]: ({commit}, { id }) => {
        if (id) {
            commit(type.MUTATE_TOGGLE_TASK_EDIT, {id})
        }
    }*/

    addMessage({commit, rootState}, {repIndex, id, answer, type}) {
        // Call api to update res on msg send => repIndex
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

    /*[type.MUTATE_ADD_TASK]: (state, {title, groupId}) => {
        state.items.push({
            id: uuidv1(),
            title: title,
            completed: false,
            edited: false,
            group: groupId,
            position: (state.items.filter((task) => task.group === groupId).length + 1)
        })
    },*/
};

export default {
    state,
    mutations,
    actions,
    getters
}