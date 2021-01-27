import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Movies from "./components/Movies";
import Shows from "./components/Shows";
import CreateBooking from "./components/CreateBooking";
import Bookings from "./components/Bookings";

import AuthService from "./services/auth-service";


const App = () => {

  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logout = () => {
    AuthService.logout();
  }


  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">Shailesh Ticket Booking</Link>

        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/movies"} className="nav-link">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/bookings"} className="nav-link">
              Bookings
            </Link>
          </li>
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logout}>
                Log Out
              </a>
            </li>
          </div>
        ): (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={"/", "/movies"} component={Movies} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/shows" component={Shows} />
          <Route exact path="/booking" component={CreateBooking} />
          <Route exact path="/bookings" component={Bookings} />
        </Switch>
      </div>
    </div>
  )
};

export default App;
