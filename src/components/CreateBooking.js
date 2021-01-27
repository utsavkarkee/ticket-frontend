import React, { useState, useEffect, useRef } from "react";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import AuthService from "../services/auth-service";
import UserService from "../services/user-service";

import { Redirect } from 'react-router-dom';

const CreateBooking = (props) => {
    const currentUser = AuthService.getCurrentUser();
    debugger;
    const form = useRef();

    const [quantity, setQuantity] = useState(1);
    const [amount, setAmount] = useState(100);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeQuantity = (e) => {
        const quantity = e.target.value;
        setQuantity(quantity);
    };

    const onChangeAmount = (e) => {
        const amount = e.target.value;
        setAmount(amount);
    };

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    const createBooking = (e) => {
        e.preventDefault();
        setLoading(true);
        UserService.bookShow(quantity, props.history.location.state.showId).then(
            (response) => {
                debugger;
                setMessage("Your ticket(s) have been booked successfully. Redirecting you to bookings...");
                props.history.push("/bookings");
                window.location.reload();
                setLoading(false);
            },
            (error) => {
                const resMessage = 
                    (error.response && error.response.data && error.response.data.message) ||
                    error.message || error.toString();
                setLoading(false);
                setMessage(resMessage);
            }
        );
    
    };

    return (
        <>
        <div className="container">
            <header className="jumbotron">
                <h3 className="text-center">Book Tickets</h3>
                <h6>Movie: "{props.history.location.state.movieTitle}"</h6>
                <h6>Show in "{props.history.location.state.cinemaHall}"</h6>
                <h6>At time: "{props.history.location.state.startTime}"</h6> 
            </header>
        </div>
        <div className="col-md-12">
          <div className="card card-container">
    
            <Form onSubmit={createBooking} ref={form}>
              <div className="form-group">
                <label htmlFor="username">Qty. of tickets</label>
                <Input
                  type="text"
                  className="form-control"
                  name="quantity"
                  value={quantity}
                  onChange={onChangeQuantity}
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="price">Amount</label>
                <Input
                  type="text"
                  className="form-control"
                  name="amount"
                  value={quantity * 100}
                  onChange={onChangeAmount}
                  disabled={true}
                />
              </div>
    
              <div className="form-group">
                <button className="btn btn-primary btn-block" disabled={loading}>
                    {loading && (
                        <span className="spinner-border spinner-border-sm"></span>
                    )}
                  <span>Book ticket!</span>
                </button>
              </div>

              {message && (
                  <div className="form-group">
                      <div className="alert" role="alert">
                          <span>{message}</span>
                      </div>
                  </div>
              )}
    
            </Form>
          </div>
        </div>
        </>
      );

};

export default CreateBooking;
