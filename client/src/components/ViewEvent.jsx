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
                </div>
            </div>
        </div>
    );
};

export default ViewEvent;
