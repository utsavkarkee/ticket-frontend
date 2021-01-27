import React from "react";
import { Redirect } from 'react-router-dom';

import UserService from "../services/user-service";
import AuthService from "../services/auth-service";

import { useState, useEffect } from "react";

import Show from "./Show";
import Booking from "./Booking";

const Bookings = (props) => {
    const currentUser = AuthService.getCurrentUser();
    const currentUserName = AuthService.getCurrentUserName();
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        UserService.getBookings().then(
            (response) => {
                setBookings(response.data);
            },
            (error) => {
                setBookings([]);
            }
        );
    }, []);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <div className="container">
            <header className="jumbotron">
                <h3 className="text-center">Bookings for user: {currentUserName}</h3>
            </header>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Booking Id</th>
                        <th scope="col">Cinema Hall</th>
                        <th scope="col">Movie Title</th>
                        <th scope="col">No. of seats</th>
                        <th scope="col">Date</th>
                        <th scope="col">Start Time</th>
                    </tr>
                </thead>
                <tbody>
                {bookings.map((booking, i) => 
                <Booking
                    key={i}
                    id={booking.bookingId} 
                    cinemaHall={booking.show.cinemaHall}
                    date={booking.show.date}
                    startTime={booking.show.startTime}
                    noOfSeats={booking.noOfSeats}
                    movieTitle={booking.show.movie.title}
                />

                )}
                </tbody>
            </table>
        </div>
    );
};

export default Bookings;