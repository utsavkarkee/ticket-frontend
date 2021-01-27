import React from "react";
import { Redirect } from 'react-router-dom';

import UserService from "../services/user-service";
import AuthService from "../services/auth-service";

import { useState, useEffect } from "react";

import Movie from "./Movie";

const Movies = () => {
    const currentUser = AuthService.getCurrentUser();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        UserService.getAllMovies().then(
            (response) => {
                setMovies(response.data);
            },
            (error) => {
                setMovies([]);
            }
        );
    }, []);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <>
        <div className="container">
            <header className="jumbotron">
                <h3 className="text-center">Movies</h3>
            </header>
            <div className="table-responsive">
            <table className="table">   
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Movie Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Genre</th>
                    </tr>
                </thead>
                <tbody>
                {movies.map((movie, i) => 
                <Movie
                    key={i}
                    id={movie.movieId} 
                    title={movie.title}
                    duration={movie.duration}
                    genre={movie.genre}
                />
                )}
                </tbody>
            </table>
        </div>
        </div>
        
        </>
    );
};

export default Movies;