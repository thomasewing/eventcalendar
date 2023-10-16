import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const EventList = (props) => {
    const { holiday } = useParams();
    const navigate = useNavigate(); 

    const events = [
        { id: 1, title: 'Hayride' },
        { id: 2, title: 'Haunted House' },
        { id: 3, title: 'Axe throwing' },
    ];




return (
    <div className='page'>
        <Header holiday={holiday}/>
        <div className="event-list-container">
            <div className="event-list-photo">
                <img src="#" alt="Placeholder" />
            </div>
            <div className="event-list-details">
            {events.map((event) => (
            <div key={event.id} className="event-item">
                <h2>{event.title}</h2>
                <button>Details</button>
            </div>
        ))}
            </div>
        </div>
    </div>
);
};

export default EventList