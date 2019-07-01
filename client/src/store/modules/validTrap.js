import {router} from '../../router'

const state = {
    slider: false,
    fakeNew: false,
    charity: false,
    quizz: false,
    harassment: false,
    convCelebrity: false,
    convHacker: false
};

const actions = {
    checkValidateAll({state, commit}) {
        if(state.slider && state.fakeNew &&
           state.charity && state.quizz &&
           state.harassment && state.convCelebrity && state.convHacker) {
            router.push({path: '/bilan'})
        }
        // TODO send to api is finish
        /*getStudentSession(sessionId)
            .then(res => {
                commit('initFlash', {
                    session: res.data.session,
                    studentId
                });
            })
            .catch(err => console.log(err))*/
    },
};

export default {
    state,
    actions,
}