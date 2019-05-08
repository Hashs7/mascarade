import {api} from "../utils/API";
import {ROUTE_TEACHER_NEW_SESSION} from "../utils/constant";

export default {
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