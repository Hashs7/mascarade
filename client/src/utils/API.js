import axios from 'axios';
import {BASE_API_URL} from "./constant";

export const instance = axios.create({
    baseURL: BASE_API_URL
});
