import axios from 'axios';
import {BASE_API_URL, ROUTE_TEACHER_ALL_SESSION, ROUTE_TEACHER_IS_AUTH} from "./constant";

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

export const getSession = () => {
    const token = localStorage.getItem('token');

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