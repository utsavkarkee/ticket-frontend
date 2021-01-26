import React from "react";
import { Redirect } from 'react-router-dom';

import UserService from "../services/user-service";
import AuthService from "../services/auth-service";

import { useState, useEffect } from "react";

const Movies = () => {
    const currentUser = AuthService.getCurrentUser();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        UserService.getAllMovies().then(
            (response) => {
                debugger;
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
        <div className="container">
            <header className="jumbotron">
                <h3>Movies</h3>
            </header>
        </div>
    );
};

export default Movies;