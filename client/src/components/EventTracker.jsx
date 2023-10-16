import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header'; 

const EventTracker = (props) => {
    const { holiday } = useParams();
    const navigate = useNavigate(); 

    const handleEventList = () => {
        if (holiday) {
            navigate(`/eventtracker/${holiday}/eventlist`);
        }
    };


return (
    <div className='page'>
        <Header holiday={holiday}/>
        <div className='welcome-page'>
            <h3>Welcome to...</h3>
            <h1> {holiday.toUpperCase()} EVENT TRACKER</h1>
                <button type="button" onClick={handleEventList}>
                    View All Events
                </button>
                <button type="button">
                    Add Event
                </button>
        </div>
    </div>
);
};

export default EventTracker