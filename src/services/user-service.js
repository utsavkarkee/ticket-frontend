import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8081'
});

const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.accessToken) {
        return { 
            'Authorization': 'Bearer ' + user.accessToken
        };
    } else {
        return {};
    }
}


axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const getAllMovies = () => {
    return axiosInstance.get("/booking/all_movies", { headers: authHeader() });
}

export default { getAllMovies };

