import React from 'react';
import { Switch, Route, Link } from "react-router-dom";


const Show = (props) => {
    debugger;

    return (
        <tr className='show'>
            <th scope="row">{props.id}</th>
            <Link to={{pathname: '/booking',state: { 
                    movieTitle: props.movieTitle,
                    cinemaHall: props.cinemaHall,
                    startTime: props.startTime,
                    showId: props.id
                } 
            }}><td>{props.cinemaHall}</td>
        </Link>

            <td>{props.date}</td>
            <td>{props.startTime}</td>
            <td>{props.endTime}</td>
            <td>100</td>
        </tr>
    )
}

export default Show;