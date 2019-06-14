const state = {
    isVisible: false,
    currentStudent: {
        id: 1,
        firstname: '',
        surname: '',
        achievements: {
            points: 0,
            shares: 0,
            reports: 0,
        },
        charity: {
            type: null,
            title: null,
            description: null
        }
    }
};

const getters = {
};

const actions = {
    updateInfo({commit, rootState}, studentId) {
        const sessionIndex = rootState.tabIndex.replace('tab-', '');
        const session = rootState.sessions[sessionIndex];
        const student = session.students.find(student => student._id === studentId);

        commit('updateInfo', student);
        commit('toggleModal', true)
    }
};

const mutations = {
    toggleModal(state, forceState) {
        if(forceState) {
            state.isVisible = forceState;
            return;
        }
        state.isVisible = !state.isVisible;
    },
    updateInfo(state, student) {
        console.log('updateInfo', student);
        state.currentStudent = student;
    },
};

export default {
    state,
    mutations,
    actions,
    getters
}