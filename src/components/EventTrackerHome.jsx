import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EventTrackerHome = (props) => {

    const [holiday, setHoliday] = useState(''); 
    const navigate = useNavigate(); 

    const handleHolidayChange = (event) => {
        setHoliday(event.target.value);
    };

    const handleContinue = () => {
        if (holiday) {
        navigate(`/eventtracker/${holiday}`);
        }
        console.log(holiday)
    };




return (
    <div>
        <h3>Welcome to...</h3>
        <h1>HOLIDAY EVENT TRACKER</h1>
        <form>
            <label htmlFor="holiday">Please select a holiday:</label>
            <select name="holiday" id="holiday" onChange={handleHolidayChange}>
                <option value="">Select a holiday</option>
                <option value="christmas">Christmas</option>
                <option value="halloween">Halloween</option>
                <option value="thanksgiving">Thanksgiving</option>
                <option value="valentinesday">Valentine's Day</option>
                <option value="fourthofjuly">Fourth of July</option>
            </select>
            <button type="button" onClick={handleContinue}>
                Continue
            </button>
        </form>
    </div>
);
};

export default EventTrackerHome