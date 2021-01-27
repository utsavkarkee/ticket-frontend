import React from 'react';


const Booking = (props) => {

    return (
        <tr className='booking'>
            <th scope="row">{props.id}</th>
            <td>{props.cinemaHall}</td>
            <td>{props.movieTitle}</td>
            <td>{props.noOfSeats}</td>
            <td>{props.date}</td>
            <td>{props.startTime}</td>
        </tr>
    )
}

export default Booking;