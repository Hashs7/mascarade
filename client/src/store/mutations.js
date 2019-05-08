export default {
    initSessions(state, sessions) {
        state.sessions = sessions
    },
    addSession(state, newSession) {
        state.sessions.push(newSession);
        state.tabIndex = 'tab-' + (state.sessions.length-1);
    },
    addStudent(state, {student, sessionId}) {
        const index = state.sessions.findIndex(el => el._id === sessionId);
        const studentExist = state.sessions[index].students.filter(el => el._id === student._id);
        if(studentExist.length) return;

        state.sessions[index].students.push(student);
        console.log(index, state.sessions[index], studentExist);
    },
    updateIndex(state, index) {
        state.tabIndex = index;
    }
}