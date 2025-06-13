// src/api/auth.js
import axios from 'axios';

export const login = (username, password) => {

    console.log("Tentative de login vers API backend...");
    return axios.post('http://localhost:5254/api/user/login', {
        username,
        password,
    });
};

