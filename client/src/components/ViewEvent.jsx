import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const ViewEvent = () => {
    const { holiday, id } = useParams();
    const [event, setEvent] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8000/eventcalendar/${id}`)
            .then((response) => {
                setEvent(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, [id]);


    if (!event) {
        return <div>Event not found</div>;
    }

    const deleteHandler = (id) => {
        axios
            .delete( `http://localhost:8000/eventcalendar/${id}` )
            .then( res => {
                console.log(res);
                setEvents(events.filter(event => event._id !== id));
            })
            .catch( err => console.log(err) )
    }
    const eventEditHandler = (id) => {  
        navigate(`/eventtracker/${holiday}/updateevent/${id}`);
    }

    return (
        <div className='page'>
            <Header holiday={holiday} />
            <div className="event-list-container">
                <div className="event-list-details">
                    <h2>Event Details</h2>
                    <p>Name: {event.name}</p>
                    <p>Address: {event.address}</p>
                    <p>Date: {event.date}</p>
                    <p>Category: {event.category}</p>
                    <p>Rating: {event.rating}</p>
                    <button className='edit-btn' onClick={ () => eventEditHandler(event._id)}>Edit</button>
                    <button className='delete-btn' onClick={ () => deleteHandler(event._id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ViewEvent;
