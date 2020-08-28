import Axios from "axios";
import cookies from 'react-cookies';

export const API_URL = "http://127.0.0.1:8000/api";

export const request = (method, url, data = null, isNeedAuthorization = false) => {
    return Axios.request({
        method: method,
        url: API_URL + url,
        data: data,
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': isNeedAuthorization ? 'Bearer ' + getToken() : null
        }
    })
}

export const getToken = () => {
    const user = getUser();
    return user && user.access_token;
}

export const getUser = () => {
    return cookies.load('user');
}









