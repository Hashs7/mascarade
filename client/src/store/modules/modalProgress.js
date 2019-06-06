const state = {
    isVisible: false,
    currentStudent: {
        id: 5454454,
        firstname: 'Paul',
        surname: 'Paul',
        achievements: {
            points: 0,
            shares: 0,
            reports: 0,
        }
    }
};

const getters = {
};

const actions = {
};

const mutations = {
    toggleModal(state, forceState) {
        if(forceState) {
            state.isVisible = forceState;
            return;
        }
        state.isVisible = !state.isVisible;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}