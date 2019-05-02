import {api} from "../utils/API";
import {ROUTE_TEACHER_NEW_SESSION} from "../utils/constant";

export default {
    addSession(ctx, className) {
        const token = localStorage.getItem('token');
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            },
            data: JSON.stringify({className}),
            url: ROUTE_TEACHER_NEW_SESSION
        };

        api(options)
            .then(res => {
                console.log(res.data.session, res.data);
                // this.linkToShare = window.location.origin + '/student/signup/' + res.data.shareId
                ctx.commit('addSession', res.data.session)
            })
            .catch((err) => {
                console.log(err);
            })


    }
}