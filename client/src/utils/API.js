import axios from 'axios';
import {
    BASE_API_URL, ROUTE_STUDENT_ACHIEVEMENT, ROUTE_STUDENT_CHARITY, ROUTE_STUDENT_DIALOG,
    ROUTE_STUDENT_FLASH_SEND, ROUTE_STUDENT_QUIZZ, ROUTE_STUDENT_SCENE,
    ROUTE_STUDENT_SESSION, ROUTE_STUDENT_SLIDER,
    ROUTE_TEACHER_ALL_SESSION,
    ROUTE_TEACHER_IS_AUTH
} from "./constant";
import {getTokenState} from "./methods";

export const api = axios.create({ baseURL: BASE_API_URL });

/**
 *
 * @param token
 * @returns {AxiosPromise}
 */
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

/**
 *
 * @returns {Promise<AxiosPromise>}
 */
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

/**
 *
 * @param sessionId
 * @returns {Promise<AxiosPromise>}
 */
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

/**
 *
 * @param senderId
 * @param receiverId
 * @returns {Promise<AxiosPromise>}
 */
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

/**
 *
 * @param studentId
 * @param sessionId
 * @param achievType
 * @param amount
 * @returns {Promise<AxiosPromise>}
 */
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

/**
 *
 * @param studentId
 * @param sessionId
 * @param charityType
 * @param title
 * @param description
 * @returns {Promise<AxiosPromise>}
 */
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

/**
 *
 * @param studentId
 * @param sessionId
 * @param dialogType
 * @param response
 * @param dialogState
 * @returns {Promise<AxiosPromise>}
 */
export const updateDialog = async (studentId, sessionId, dialogType, response, dialogState) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        url: ROUTE_STUDENT_DIALOG,
        data: {
            studentId,
            sessionId,
            dialogType,
            response,
            state: dialogState
        }
    };

    return api(options)
};

/**
 *
 * @param studentId
 * @param sessionId
 * @param sceneType
 * @param action
 * @returns {Promise<AxiosPromise>}
 */
export const updateScene = async (studentId, sessionId, sceneType, action) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        url: ROUTE_STUDENT_SCENE,
        data: {
            studentId,
            sessionId,
            sceneType,
            action
        }
    };

    return api(options)
};

/**
 *
 * @param studentId
 * @param sessionId
 * @param amount
 * @returns {Promise<AxiosPromise>}
 */
export const updateSlider = async (studentId, sessionId, amount) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        url: ROUTE_STUDENT_SLIDER,
        data: {
            studentId,
            sessionId,
            amount
        }
    };

    return api(options)
};

/**
 *
 * @param studentId
 * @param sessionId
 * @param responses
 * @returns {Promise<AxiosPromise>}
 */
export const updateQuizz = async (studentId, sessionId, responses) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        url: ROUTE_STUDENT_QUIZZ,
        data: {
            studentId,
            sessionId,
            responses
        }
    };

    return api(options)
};