import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({holiday}) => {
    return (
    <header>
        <div className="navbar">
            <div className="navbar-left">
                <h1> {holiday} Event Tracker</h1>
            </div>
            <div className="navbar-right">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/eventlist">Events</Link></li>
                    <li><Link to="/addevent">Add Event</Link></li>
                </ul>
            </div>
        </div>
    </header>
    );
};

export default Header;
