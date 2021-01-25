import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const Hello = (props) => (
  <div>
    <p>Hello {props.attr1}</p>
  </div>
);

ReactDOM.render(
  <Hello attr1="Attribute 1" />,
  document.getElementById('root')
);