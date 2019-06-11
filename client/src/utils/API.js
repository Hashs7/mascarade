import axios from 'axios';
import {
    BASE_API_URL, ROUTE_STUDENT_ACHIEVEMENT, ROUTE_STUDENT_CHARITY,
    ROUTE_STUDENT_FLASH_SEND,
    ROUTE_STUDENT_SESSION,
    ROUTE_TEACHER_ALL_SESSION,
    ROUTE_TEACHER_IS_AUTH
} from "./constant";
import {getTokenState} from "./methods";

export const api = axios.create({
    baseURL: BASE_API_URL
});

export const tokenIsValid = (token) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        url: ROUTE_TEACHER_IS_AUTH
    };

    return api(options)
};

export const getSessions = async () => {
    const token = await getTokenState();

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
        url: ROUTE_TEACHER_ALL_SESSION
    };

    return api(options)
};

export const getStudentSession = async (sessionId) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        url: ROUTE_STUDENT_SESSION + sessionId
    };

    return api(options)
};


export const sendFlash = async (senderId, receiverId) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        url: ROUTE_STUDENT_FLASH_SEND,
        data: {
            studentFromId: senderId,
            studentToId: receiverId
        }
    };

    return api(options)
};

export const updateAchievement = async (studentId, sessionId, achievType, amount) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        url: ROUTE_STUDENT_ACHIEVEMENT,
        data: {
            studentId: studentId,
            sessionId: sessionId,
            achievType: achievType,
            amount: amount
        }
    };

    return api(options)
};

export const updateCharity = async (studentId, sessionId, charityType, title, description) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        url: ROUTE_STUDENT_CHARITY,
        data: {
            studentId,
            sessionId,
            charityType,
            title,
            description
        }
    };

    return api(options)
};