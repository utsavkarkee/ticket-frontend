import axios from "axios";

const API_URL = "https://ticket-book-app.herokuapp.com/auth/";
// const API_URL = "http://localhost:8081/auth/";

const register = (username, password) => {
    return axios
        .post(API_URL + "signup", {
            username, 
            password
        });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "login", {username, password})
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("username", username);
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const getCurrentUserName = () => {
    return localStorage.getItem("username");
}

export default {
    register, login, logout, getCurrentUser, getCurrentUserName,
};