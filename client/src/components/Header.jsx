import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Header = ({holiday}) => {
    const navigate = useNavigate(); 

    const handleEventList = () => {
        if (holiday) {
            navigate(`/eventtracker/${holiday}/eventlist`);
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
                    <li><Link to="/">Home</Link></li>
                    <li><a onClick={handleEventList}>Events</a></li>
                    <li><Link to="/addevent">Add Event</Link></li>
                </ul>
            </div>
        </div>
    </header>
    );
};

export default Header;
