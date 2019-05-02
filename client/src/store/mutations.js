import Vue from "vue";

export default {
    initSessions(state, sessions) {
        Vue.delete(state, 'sessions');
        state.sessions = sessions
    },
    addSession(state, newSession) {
        state.sessions.push(newSession);
    },
    addStudent(state, {student, sessionId}) {
        const index = state.sessions.findIndex(el => el._id === sessionId);
        state.sessions[index].students.push(student);
        console.log(index, state.sessions[index]);
    }
}