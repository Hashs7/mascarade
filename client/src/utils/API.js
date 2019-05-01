import axios from 'axios';
import {BASE_API_URL, ROUTE_TEACHER_IS_AUTH} from "./constant";

export const api = axios.create({
    baseURL: BASE_API_URL
});


export const tokenIsValid = () => {
    const token = localStorage.getItem('token');

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