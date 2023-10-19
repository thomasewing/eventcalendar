import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const EventList = (props) => {
    const { holiday } = useParams();
    const navigate = useNavigate(); 
    const [ events, setEvents ] = useState([]);
    const [ event, setEvent ] = useState(null);

    // const events = [
    //     { id: 1, title: 'Hayride' },
    //     { id: 2, title: 'Haunted House' },
    //     { id: 3, title: 'Axe throwing' },
    // ];

    useEffect (() => {
        axios
            .get( 'http://localhost:8000/eventcalendar' )
            .then( res => setEvents(res.data) )
            .catch( err => console.log(err) )
    }, [])

    const eventDetailsHandler = (id) => {
        navigate(`/eventtracker/${holiday}/eventdetails/${id}`);
    };


    const deleteHandler = (id) => {
        axios
            .delete( `http://localhost:8000/eventcalendar/${id}` )
            .then( res => {
                console.log(res);
                setEvents(events.filter(event => event._id !== id));
            })
            .catch( err => console.log(err) )
    }

return (
    <div className='page'>
        <Header holiday={holiday}/>
        <div className="event-list-container">
            <div className="event-list-details">
            {events.map((event, index) => (
            <div key={event._id} className="event-item">
                <h2>{event.name}</h2>
                <button className='details-btn' onClick={ () => eventDetailsHandler(event._id)}>Details</button>
                <button className='delete-btn' onClick={ () => deleteHandler(event._id)}>Delete</button>
            </div>
        ))}
            </div>
        </div>
    </div>
);
};

export default EventList