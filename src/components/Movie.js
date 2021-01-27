import React from 'react';
import { Switch, Route, Link } from "react-router-dom";

const Movie = ({ id, title, duration, genre }) => {

  return (
    
    <tr className='movie'>
        <th scope="row">{id}</th>
        <Link to={{
        pathname: '/shows',
        state: {
          movie: {id: id, title: title, duration: duration, genre: genre}}
        }}><td>{title}</td></Link>
        <td>{duration}</td>
        <td>{genre}</td>
    </tr>
    
  )
}

export default Movie;