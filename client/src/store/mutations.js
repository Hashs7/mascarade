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
        const indexSession = state.sessions.findIndex(el => el._id === sessionId);
        if(isNull(indexSession)) return;

        const indexStudent = state.sessions[indexSession].students.findIndex(el => el._id === studentId);
        if(isNull(indexStudent)) return;

        const student = state.sessions[indexSession].students[indexStudent];
        Vue.set(state.sessions[indexSession].students, indexStudent,  {
            ...student,
            scene: counter
        });
    },
    updateStudentAchievement(state, { amount, achievType, studentId, sessionId }) {
        const indexSession = state.sessions.findIndex(el => el._id === sessionId);
        if(isNull(indexSession)) return;

        const indexStudent = state.sessions[indexSession].students.findIndex(el => el._id === studentId);
        if(isNull(indexStudent)) return;

        state.sessions[indexSession].students[indexStudent].achievements[achievType] = amount;
        /*Vue.set(state.sessions[indexSession].students[indexStudent].achievements, achievType,  {
            ...student,
            scene: counter
        });*/
    },
    updateIndex(state, index) {
        state.tabIndex = index;
    },
    updateDashboardView(state, index) {
        state.dashboardView = index;
    }
}