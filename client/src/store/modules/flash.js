import {getStudentSession, sendFlash} from "../../utils/API";

const state = {
    currentFlash: 0,
    studentSession: []
};

const getters = {

};

const actions = {
    initFlash({commit}, {sessionId, studentId}) {
        getStudentSession(sessionId)
            .then(res => {
                commit('initFlash', {
                    session: res.data.session,
                    studentId
                });
            })
            .catch(err => console.log(err))
    },
    sendFlash({commit}, {sender, receiver}) {
        sendFlash(sender, receiver)
            .then(res => {
                commit('sendFlash', res);
            })
            .catch(err => console.log(err))
    }
};

const mutations = {
    initFlash(state, {session, studentId}) {
        state.studentSession = session.students.filter(student => student._id !== studentId)
    },
    sendFlash(state, res) {
        console.log('flash envoyé', res);
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}