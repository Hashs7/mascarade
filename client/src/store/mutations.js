import Vue from "vue";

export default {
    initSessions(state, sessions) {
        sessions.map((session, i) => {
            console.log("session", state.sessions, i, session);
            Vue.set(state.sessions, i, session);

            session.students.map((student, j) => {
                console.log("session", state.sessions[i].students);
                console.log(state.sessions[i].students, j, student, 'vue set');

                Vue.set(state.sessions[i].students, j, student);
            });
        });
    },
    initTeacher(state, {token, teacherId, name}) {
        state.token = token;
        state.teacherId = teacherId;
        state.teacherName = name;
        state.dashboardView = "board";
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
        console.log(state.sessions, index);
        if(!studentExist.length) return;

        state.sessions[index].students.push(student);
    },
    updateStudentScene(state, { counter, studentId, sessionId }) {
        const indexSession = state.sessions.findIndex(el => el._id === sessionId);
        if(!indexSession) return;
        const indexStudent = state.sessions[indexSession].students.findIndex(el => el._id === studentId);
        if(!indexStudent) return;

        const student = state.sessions[indexSession].students[indexStudent];
        Vue.set(state.sessions[indexSession].students, indexStudent,  {
            ...student,
            scene: counter
        });
    },
    updateIndex(state, index) {
        state.tabIndex = index;
    },
    updateDashboardView(state, index) {
        state.dashboardView = index;
    }
}