import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const ViewEvent = () => {
    const { holiday, id } = useParams();
    const [ event, setEvent ] = useState(null);
    const [ errors, setErrors ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/eventcalendar/${id}`)
            .then((response) => {
                setEvent(response.data);
            })
            .catch((err) => {
                setErrors(err);
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
                navigate(`/eventtracker/${holiday}/eventlist`);
            })
            .catch( err => console.log(err) )
    }
    const eventEditHandler = (id) => {  
        navigate(`/eventtracker/${holiday}/updateevent/${id}`);
    }
    const handleNavBack = () => {
        if (holiday) {
            navigate(`/eventtracker/${holiday}/eventlist`);
        }
    };

    return (
        <div className='page'>
            <Header holiday={holiday} />
            <div className="event-details-container">
                <div className="event-details-details">
                    <h2>Event Details</h2>
                    <p>Name: {event.name}</p>
                    <p>Address: {event.address}</p>
                    <p>Date: {(event.date).toString()}</p>
                    <p>Category: {event.category}</p>
                    <p>Rating: {event.rating}</p>
                    <button className='edit-btn-2' onClick={ () => eventEditHandler(event._id)}>Edit</button>
                    <button className='delete-btn-2' onClick={ () => deleteHandler(event._id)}>Delete</button>
                    <a className='backLink' onClick={handleNavBack}>Return to Event List</a>
                </div>
            </div>
        </div>
    );
};

export default ViewEvent;
