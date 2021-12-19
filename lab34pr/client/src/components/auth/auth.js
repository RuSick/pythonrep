
import axios from "axios";
import jwt_decode from "jwt-decode";

export const registration = async (
    email,
    password,
    name,
    role
    ) => {
    const {data} = await axios.post('/register', {
        email,
        password,
        login:name,
        role
    });
    localStorage.setItem('jogging_token', data.access_token);
    return jwt_decode(data.access_token);
}

export const login = async (contractNumber, password) => {
    const {data} = await axios.post('/auth', {login:contractNumber, password});
    localStorage.setItem('jogging_token', data.access_token);
    return jwt_decode(data.access_token);
}
