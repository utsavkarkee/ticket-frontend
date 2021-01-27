import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://ticket-book-app.herokuapp.com'
    // baseURL: 'http://localhost:8081'
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

const getShowsForMovie = (movieId) => {
    return axiosInstance.get("/booking/show", { 
        headers: authHeader(), 
        params: { movie: movieId } 
    });
}

const bookShow = (quantity, showId) => {

    return axiosInstance.post("/booking/book_show", {
        "noOfSeats": parseInt(quantity),
        "payment": {
            "amount": quantity * 100,
            "paymentMethod": "credit",
            "timeStamp": new Date().toISOString()
        },
        "showId": showId,
        "userName": localStorage.getItem("username")
    }, {
        headers: authHeader()
    })
};

const getBookings = () => {
    return axiosInstance.get("/booking", {
        headers: authHeader(),
        params: { userName: localStorage.getItem("username") }
    });
}

export default { getAllMovies, getShowsForMovie, bookShow, getBookings };

