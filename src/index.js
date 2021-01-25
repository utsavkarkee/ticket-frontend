import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const Hello = (props) => (
  <div>
    <h1>Ticket Reservation System</h1>
    <br></br>
    <p>Congratulations! You have booked a ticket for yourself. Go to the cinema hall! Enjoy!</p>
  </div>
);

ReactDOM.render(
  <Hello attr1="Attribute 1" />,
  document.getElementById('root')
);