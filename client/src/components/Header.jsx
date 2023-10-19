import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Header = ({holiday}) => {
    const navigate = useNavigate(); 

    const handleEventList = () => {
        if (holiday) {
            navigate(`/eventtracker/${holiday}/eventlist`);
        }
    };
    const handleHomePage = () => {
        if (holiday) {
            navigate(`/eventtracker/${holiday}`);
        }
    };
    const handleNewEvent = () => {
        if (holiday) {
            navigate(`/eventtracker/${holiday}/newevent`);
        }
    };

    return (
    <header>
        <div className="navbar">
            <div className="navbar-left">
                <h1> {holiday} Event Tracker</h1>
            </div>
            <div className="navbar-right">
                <ul>
                    <li><a onClick={handleHomePage}>Home</a></li>
                    <li><a onClick={handleEventList}>Events</a></li>
                    <li><a onClick={handleNewEvent}>Add Event</a></li>
                </ul>
            </div>
        </div>
    </header>
    );
};

export default Header;
