import Vue from "vue";

export default {
    initSessions(state, sessions) {
        console.log('sessions', sessions);
        /*sessions.map((session, i) => {
            Vue.set(state.sessions, i, session);

            session.students.map((student, j) => {
                Vue.set(state.sessions[i].students, j, student);
                console.log(state.sessions[i].students, j, student, 'vue set');
            });
        });*/
        Vue.set(state, 'sessions', sessions);
    },
    initStudent(state, {studentId, sessionId}) {
        state.studentId = studentId;
        state.sessionId = sessionId;
    },
    addSession(state, newSession) {
        state.sessions.push(newSession);
        state.tabIndex = 'tab-' + (state.sessions.length-1);
    },
    addStudent(state, {student, sessionId}) {
        const index = state.sessions.findIndex(el => el._id === sessionId);
        const studentExist = state.sessions[index].students.filter(el => el._id === student._id);
        if(!studentExist.length) return;

        state.sessions[index].students.push(student);
    },
    updateStudentScene(state, { counter, studentId, sessionId }) {
        const indexSession = state.sessions.findIndex(el => el._id === sessionId);
        const indexStudent = state.sessions[indexSession].students.findIndex(el => el._id === studentId);
        if(indexStudent) return;

        const student = state.sessions[indexSession].students[indexStudent];
        Vue.set(state.sessions[indexSession].students, indexStudent,  {
            ...student,
            scene: counter
        });
        //TODO ça refresh pas le component
        console.log('student update scene', student);
    },
    updateIndex(state, index) {
        state.tabIndex = index;
    },
    updateDashboardView(state, index) {
        state.dashboardView = index;
    }
}