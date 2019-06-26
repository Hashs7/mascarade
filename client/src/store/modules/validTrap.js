import {getStudentSession, sendFlash} from "../../utils/API";
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
        // TODO send to api is finish
        /*if(state.slider && state.fakeNew &&
           state.charity && state.quizz &&
           state.harassment && state.convCelebrity && state.convHacker) {
            router.push({path: '/bilan'})
        }*/
        console.log('check', state);
        if( state.fakeNew &&
           state.charity &&
           state.harassment) {
            console.log('push');
            router.push({path: '/bilan'})
        }
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
}