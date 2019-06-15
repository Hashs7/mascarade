import Vue from "vue";
import {isNull} from "../utils/methods";
import {updateScene} from "../utils/API";

const findStudent = (state, sessionId, studentId) => {
    const indexSession = state.sessions.findIndex(el => el._id === sessionId);
    if(isNull(indexSession)) return;

    const indexStudent = state.sessions[indexSession].students.findIndex(el => el._id === studentId);
    if(isNull(indexStudent)) return;

    return state.sessions[indexSession].students[indexStudent];
};

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
    initStudent(state, {studentId, sessionId, firstname, surname}) {
        state.studentId = studentId;
        state.sessionId = sessionId;
        state.firstname = firstname;
        state.surname = surname;
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
        const student = findStudent(state, sessionId, studentId);
        Vue.set(state.sessions[indexSession].students, indexStudent,  {
            ...student,
            scene: counter
        });
    },
    updateStudentAchievement(state, { amount, achievType, studentId, sessionId }) {
        const student = findStudent(state, sessionId, studentId);
        student.achievements[achievType] = amount;
    },
    updateStudentCharity(state, {studentId, sessionId, charityType, title, description}) {
        console.log('updateStudentCharity');
        const student = findStudent(state, sessionId, studentId);
        student.charity = {
            type: charityType,
            title,
            description
        }
    },
    updateStudentDialog(state, { dialogType, conversation, dialogState, studentId, sessionId }) {
        console.log('updateDialog');
        const student = findStudent(state, sessionId, studentId);
        student.dialog[dialogType].conversation = conversation;
        student.dialog[dialogType].state = dialogState;
    },
    updateBOScene(state, {studentId, sessionId, sceneType, action}) {
        console.log('updateScene');
        const student = findStudent(state, sessionId, studentId);
        student[sceneType].action = action;
    },
    updateIndex(state, index) {
        state.tabIndex = index;
    },
    updateDashboardView(state, index) {
        state.dashboardView = index;
    }
}