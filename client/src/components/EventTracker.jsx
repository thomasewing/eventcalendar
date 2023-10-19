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
    const handleNewEvent = () => {
        if (holiday) {
            navigate(`/eventtracker/${holiday}/newevent`);
        }
    };
    const handleWelcomePage = () => {
        if (holiday) {
            navigate(`/`);
        }
    };

return (
    <div className='page'>
        <Header holiday={holiday}/>
        <div className='welcome-page'>
            <h3>Welcome to...</h3>
            <h1 className='title'> {holiday.toUpperCase()} EVENT TRACKER</h1>
            <button className="welcome-page-btn btn-animation" type="button" onClick={handleEventList}>
                <span>View All Events</span>
            </button>
            <button className="welcome-page-btn btn-animation" type="button" onClick={handleNewEvent}>
                <span>Add Event</span>
            </button>
            <br /><a className="backLink" onClick={handleWelcomePage}>Choose a Different Holiday</a>
        </div>
    </div>
);
};

export default EventTracker