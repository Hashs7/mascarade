import Vue from "vue";
import {isNull} from "../utils/methods";

export default {
    initSessions(state, sessions) {
        state.sessions = [];
        sessions.map((session, i) => {
            Vue.set(state.sessions, i, session);
            session.students.map((student, j) => {
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
        if(!!studentExist.length) return;

        state.sessions[index].students.push(student);
    },
    updateStudentScene(state, { counter, studentId, sessionId }) {
        console.log('updateScene');
        const indexSession = state.sessions.findIndex(el => el._id === sessionId);
        console.log('indexSession', indexSession, isNull(indexSession));
        if(isNull(indexSession)) return;

        const indexStudent = state.sessions[indexSession].students.findIndex(el => el._id === studentId);
        console.log('indexStudent', indexStudent, isNull(indexStudent));
        if(isNull(indexStudent)) return;

        const student = state.sessions[indexSession].students[indexStudent];
        Vue.set(state.sessions[indexSession].students, indexStudent,  {
            ...student,
            scene: counter
        });
        console.log('student', student, state.sessions[indexSession].students[indexStudent]);
    },
    updateIndex(state, index) {
        state.tabIndex = index;
    },
    updateDashboardView(state, index) {
        state.dashboardView = index;
    }
}