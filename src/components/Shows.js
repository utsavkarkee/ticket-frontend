import React from "react";
import { Redirect } from 'react-router-dom';

import UserService from "../services/user-service";
import AuthService from "../services/auth-service";

import { useState, useEffect } from "react";

import Show from "./Show";

const Shows = (props) => {
    const currentUser = AuthService.getCurrentUser();
    const [shows, setShows] = useState([]);

    useEffect(() => {
        UserService.getShowsForMovie(props.history.location.state.movie.id).then(
            (response) => {
                setShows(response.data);
            },
            (error) => {
                setShows([]);
            }
        );
    }, []);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <div className="container">
            <header className="jumbotron">
                <h3 className="text-center">Shows for Movie {props.history.location.state.movie.title}</h3>
            </header>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Show Id</th>
                        <th scope="col">Cinema Hall</th>
                        <th scope="col">Date</th>
                        <th scope="col">StartTime</th>
                        <th scope="col">EndTime</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                {shows.map((show, i) => 
                <Show
                    key={i}
                    id={show.showId} 
                    cinemaHall={show.cinemaHall}
                    date={show.date}
                    startTime={show.startTime}
                    endTime={show.endTime}
                    movieTitle={props.history.location.state.movie.title}
                />
                )}
                </tbody>
            </table>
        </div>
    );
};

export default Shows;