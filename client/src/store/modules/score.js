const state = {
    points: 0,
    shares: 0,
    reports: 0
};

const getters = {
};

const actions = {
    updateAchievement({commit}, {type, amount}) {
        //TODO update in BO
        commit('updateAchievement', {type, amount})
    }
};

const mutations = {
    updateAchievement(state, {type, amount}) {
        state[type] += amount;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}