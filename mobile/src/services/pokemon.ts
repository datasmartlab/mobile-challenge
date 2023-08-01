import axios from 'axios';
import { BASE_URL } from '@env';

const baseURL = BASE_URL;

export const api = axios.create({
    baseURL,
});
