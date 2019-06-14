import {api, updateScene} from "../utils/API";
import {ROUTE_TEACHER_NEW_SESSION} from "../utils/constant";

export default {
    updateScene({commit, state}, {sceneType, action}) {
        updateScene(state.studentId, state.sessionId, sceneType, action)
            .then(res => console.log(res))
            .catch(err => console.log(err))

    },
    addSession({commit, state}, className) {
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + state.token
            },
            data: JSON.stringify({className}),
            url: ROUTE_TEACHER_NEW_SESSION
        };

        api(options)
            .then(res => {
                console.log(res.data.session, res.data);
                commit('addSession', res.data.session)
            })
            .catch((err) => {
                console.log(err);
            })
    }
}